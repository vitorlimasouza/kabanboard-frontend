export interface PageSort {
    empty: Boolean,
    unsorted: Boolean,
    sorted: Boolean
}

export interface PageInfo {
    sort: PageSort,
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: Boolean,
    unpaged: Boolean
}

export default interface Pageable<T> {
    content: T[],
    pageable: PageInfo,
    totalPages: number,
    totalElements: number,
    last: Boolean,
    size: number,
    number: number,
    sort: PageSort,
    numberOfElements: number,
    first: Boolean,
    empty: Boolean
}

export function pageableFromData<T>(
    data: any,
    contentItemConverter: (contentItem: any) => T
): Pageable<T> {
    return {
        content: (data.content as Array<any>).map(it => contentItemConverter(it)),
        pageable: data.pageable,
        totalPages: data.totalPages,
        totalElements: data.totalElements,
        last: data.last,
        size: data.size,
        number: data.number,
        sort: data.sort,
        numberOfElements: data.numberOfElements,
        first: data.first,
        empty: data.empty
    }
}