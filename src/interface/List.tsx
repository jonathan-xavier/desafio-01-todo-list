
export type IList = {

    id: string,
    title: string,
    isCompleted: boolean,
    onDelete?: (item: string) => void,
    onChecked?: (item: string) => void,
}





