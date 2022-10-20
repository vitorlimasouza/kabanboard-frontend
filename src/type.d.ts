interface IPageSort {
    empty: Boolean,
    unsorted: Boolean,
    sorted: Boolean
}

interface IPageInfo {
    sort: IPageSort,
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: Boolean,
    unpaged: Boolean
}

interface IPageable<T> {
    content: T[],
    pageable: IPageInfo,
    totalPages: number,
    totalElements: number,
    last: Boolean,
    size: number,
    number: number,
    sort: IPageSort,
    numberOfElements: number,
    first: Boolean,
    empty: Boolean
}

interface ICard {
    id: string,
    title: string,
    order: number
}

interface IColumn {
    id: string,
    name: string,
    position: number
}

interface ITag {
    id: string,
    title: string,
    type: string,
    color: string
}

interface IMember {
    id: string,
    userName: string,
    photoUrl: string | null
}

interface IBoard {
    id: string,
    name: string,
    columns: IColumn[],
    tags: ITag[],
    members: IMember[],
}