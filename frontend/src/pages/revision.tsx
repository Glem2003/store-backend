// view
import getRevisionView from "../views/revisionViews"

// type
import { Resource, Mode } from "../types/RevisionType"

const Revision = ({ resource, mode }: { resource: Resource, mode: Mode }) => {
    return getRevisionView({ resource, mode })
}

export default Revision