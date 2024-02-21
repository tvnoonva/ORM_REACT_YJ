import React, { useState } from 'react'

const Productmanager = () => {
    const [product, setProduct] = useState({
        productName: '',
        price: 0,
        stock: 0,
        manufacturer: '',
    })

    const [productList, setProductList] = useState([])

    const handleProduct = (e) => {
        //리액트에서는 UI요소와 바인딩된 데이터 소스(객체참조타입)의 값을 변경할때
        //데이터 소스가 변경되었는지를 자동으로 감지한다 그런데 참조타입을 그냥 복사하거나
        //그냥 속성의 값을 그대로 변경하는 경우 메모리 주소가 변경되지 않기 때문에 변경을 감지할 수 없다
        //그래서 DeepCopy의 일종인 spread 연산자를 통해 원본 데이터 소스와 복사본(DeepCopy)을 만들어
        //복사본의 새로운 메모리 주소와 공간을 할당해서 객체가 변경되게 처리하여 데이터바인딩을 수행

        //하기 방식대로 직접적인 속성값을 변경하거나 복사본을 만들어서 변경해도
        //리액트 데이터바인딩 엔진에서는 참조타입의 데이터 변경사실을 인지하지못해 화면요소를 재랜더링 하지 않는다
        // product.productName="강창훈"
        // var newProduct= product; //swallow copy
        // newProduct.productName="test";

        //참조타입의 데이터를 사용해 데이터바인딩하려면
        //참조타입의 속성/값을 변경시킬때는 반드시 DeepCopy(spread연산자)를 통해
        //새로 메모리를 할당해 데이터바인딩 엔진에 변경 사실을 알려줘야 화면이 다시 그려진다.

        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleInit = () => {
        setProduct({
            productName: '',
            price: 0,
            stock: 0,
            manufacturer: '',
        })
    }

    const handleSave = () => {
        //단일상품 개체의 복사본을 만들어 List의 복사본에 추가하는 spread연산자
        setProductList([...productList, { ...product }])
    }

    const productUIList = productList.map((pro, i) => (
        <tr key={i}>
            <td>{pro.productName}</td>
            <td>{pro.price}</td>
            <td>{pro.stock}</td>
            <td>{pro.manufacturer}</td>
            <td>
                <button>선택</button>
                <button>삭제</button>
            </td>
        </tr>
    ))

    const handleSelect = (pro) => {
        setProduct(pro)
    }

    const handleRemove = (pro) => {
        const filteredProductList = productList.filter((p) => p.productName !== pro.productName)
        setProductList(filteredProductList)
    }

    return (
        <div>
            <h1>제품정보 관리화면</h1>
            제품명:
            <input type="text" name="productname" value={product.productName} onChange={handleProduct} />
            <br />
            가격:
            <input type="text" name="price" value={product.price} onChange={handleProduct} />
            <br />
            재고:
            <input type="text" name="stock" value={product.stock} onChange={handleProduct} />
            <br />
            제조사:
            <input type="text" name="manufacturer" value={product.manufacturer} onChange={handleProduct} />
            <br />
            <button onClick={handleSave}>저장</button>
            <button onClick={handleInit}>초기화</button>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>재고</th>
                        <th>제조사</th>
                        <th>선택/삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {productUIList} */}

                    {productList.map((pro, i) => (
                        <tr key={i}>
                            <td>{pro.productName}</td>
                            <td>{pro.price}</td>
                            <td>{pro.stock}</td>
                            <td>{pro.manufacturer}</td>
                            <td>
                                <button onClick={() => handleSelect(pro)}>선택</button>
                                <button onClick={() => handleRemove(pro)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Productmanager
