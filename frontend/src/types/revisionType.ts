export type Resource = 'product' | 'order' | 'customers'
export type Mode = 'add' | 'edit'

export type ResourceFormConfigs = Record<Resource, Record<Mode, FormConfig>>

export interface RevisionType {
    resource: Resource
    mode: Mode
}

export interface FormConfig {
    title: string
}