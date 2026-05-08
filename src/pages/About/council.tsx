import PersonDetailPage from "@/components/people"
import EditorInChief from "@/data/council/editor-in-chief"
import RoutePath from "@/routes"

const EditorInChiefPage = () => { return PersonDetailPage({ person: EditorInChief, route: RoutePath.EditorInChief }) }

export {
    EditorInChiefPage
}