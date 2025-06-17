// types
import { Resource, Mode } from "../../types/RevisionType"

export interface UseRevisionFormProps {
    resource: Resource
    mode: Mode
    id?: string
}