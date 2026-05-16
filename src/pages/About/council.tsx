import PersonDetailPage from "@/components/people"
import AssociateEditor from "@/data/council/associate-editor"
import CBNRepresentative from "@/data/council/cbn-rep"
import EditorInChief from "@/data/council/editor-in-chief"
import ElectedMemberFive from "@/data/council/elected-member-five"
import ElectedMemberFour from "@/data/council/elected-member-four"
import ElectedMemberOne from "@/data/council/elected-member-one"
import ElectedMemberSix from "@/data/council/elected-member-six"
import ElectedMemberThree from "@/data/council/elected-member-three"
import ElectedMemberTwo from "@/data/council/elected-member-two"
import ManagingEditor from "@/data/council/managing-editor"
import NBSRepresentative from "@/data/council/nbs-rep"
import NPCRepresentative from "@/data/council/npc-rep"
import President from "@/data/council/president"
import Registrar from "@/data/council/registrar"
import VicePresident from "@/data/council/vice-president"
import RoutePath from "@/routes"

const PresidentPage = () => { return PersonDetailPage({ person: President, route: RoutePath.President }) }
const VicePresidentPage = () => { return PersonDetailPage({ person: VicePresident, route: RoutePath.VicePresident }) }
const RegistrarPage = () => { return PersonDetailPage({ person: Registrar, route: RoutePath.Registrar }) }
const ElectedMemberOnePage = () => { return PersonDetailPage({ person: ElectedMemberOne, route: RoutePath.ElectedMemberOne }) }
const ElectedMemberTwoPage = () => { return PersonDetailPage({ person: ElectedMemberTwo, route: RoutePath.ElectedMemberTwo }) }
const ElectedMemberThreePage = () => { return PersonDetailPage({ person: ElectedMemberThree, route: RoutePath.ElectedMemberThree }) }
const ElectedMemberFourPage = () => { return PersonDetailPage({ person: ElectedMemberFour, route: RoutePath.ElectedMemberFour }) }
const ElectedMemberFivePage = () => { return PersonDetailPage({ person: ElectedMemberFive, route: RoutePath.ElectedMemberFive }) }
const ElectedMemberSixPage = () => { return PersonDetailPage({ person: ElectedMemberSix, route: RoutePath.ElectedMemberSix }) }
const NBSRepresentativePage = () => { return PersonDetailPage({ person: NBSRepresentative, route: RoutePath.NBSRepresentative }) }
const CBNRepresentativePage = () => { return PersonDetailPage({ person: CBNRepresentative, route: RoutePath.CBNRepresentative }) }
const NPCRepresentativePage = () => { return PersonDetailPage({ person: NPCRepresentative, route: RoutePath.NPCRepresentative }) }
const EditorInChiefPage = () => { return PersonDetailPage({ person: EditorInChief, route: RoutePath.EditorInChief }) }
const ManagingEditorPage = () => { return PersonDetailPage({ person: ManagingEditor, route: RoutePath.ManagingEditor }) }
const AssociateEditorPage = () => { return PersonDetailPage({ person: AssociateEditor, route: RoutePath.AssociateEditor }) }



export {
    PresidentPage,
    VicePresidentPage,
    RegistrarPage,
    ElectedMemberOnePage,
    ElectedMemberTwoPage,
    ElectedMemberThreePage,
    ElectedMemberFourPage,
    ElectedMemberFivePage,
    ElectedMemberSixPage,
    EditorInChiefPage,
    ManagingEditorPage,
    AssociateEditorPage,
    CBNRepresentativePage,
    NPCRepresentativePage,
    NBSRepresentativePage

}