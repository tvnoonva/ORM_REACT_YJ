//전역 단일 게시글 타입 정의
export type Article = {
  article_id?: number;
  board_type_code?: number;
  article_type_code?: number;
  title: string;
  contents: string | null; //여러 타입을 동시지원
  view_count?: number;
  ip_address?: string;
  is_display_code: number;
  reg_date?: string;
  reg_member_id?: number;
  edit_date?: string | null;
  edit_member_id?: number | null;
};

//전역 단일 게시글 타입 정의 - 인터페이스 방식
export interface IArticle {
  article_id?: number;
  board_type_code?: number;
  article_type_code?: number;
  title: string;
  contents: string | null; //여러 타입을 동시지원
  is_display_code: number;
}

//멤버 데이터
export type Member = {
  email: string;
  password: string;
  confirmpassword?: string;
  name?: string;
};
