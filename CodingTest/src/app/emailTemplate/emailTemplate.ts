export interface IEmailTemplate {
    DateUpdated: string,
    FromAddress: string,
    EmailLabel: string,
    //_x003C_Subject_x003E_k__BackingField : string,
    //_x003C_FromAddress_x003E_k__BackingField: string,
}

export interface IColumn {
    Label: string,
    Field: string,
    SortDirection: string,
    ImgUrl: string
}