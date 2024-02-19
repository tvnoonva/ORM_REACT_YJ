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
