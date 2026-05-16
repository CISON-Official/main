import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import { Skeleton } from "./components/ui/skeleton";
import RoutePath from "./routes";
import { lazyImport } from "./lib/utils";

const PageLoader = () => (
  <div className="container py-20">
    <div className="space-y-4">
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-64 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  </div>
);

const HomePage = lazy(() => import("@/pages/Home"));

// Privacy
const PolicyPage = lazy(() => import("@/pages/Privacy/policy"));
// const TermsPage = lazy(() => import("@/pages/Privacy/terms"));

// About 
const AboutPage = lazy(() => import("@/pages/About"));
const ObjectivePage = lazy(() => import("@/pages/About/objectives"));
const HistoryPage = lazy(() => import("@/pages/About/history"));
const StructureAndGovernancePage = lazy(() => import("@/pages/About/structureandgovernance"));
const Leadership = lazy(() => import("@/pages/About/leadership"));
const CoucilMembers = lazy(() => import("@/pages/About/electedcouncilmembers"));
const Departments = lazy(() => import("@/pages/About/departments"));
const Committee = lazy(() => import("@/pages/About/committee"));


// PRS
const CisonWorkshopPage = lazy(() => import("@/pages/PRS/2nd_2026"));

// Council Members
const EditorInChiefPage = lazyImport(() => import("@/pages/About/council"), "EditorInChiefPage");
const PresidentPage = lazyImport(() => import("@/pages/About/council"), "PresidentPage");
const VicePresidentPage = lazyImport(() => import("@/pages/About/council"), "VicePresidentPage");
const RegistrarPage = lazyImport(() => import("@/pages/About/council"), "RegistrarPage");
const ElectedMemberOnePage = lazyImport(() => import("@/pages/About/council"), "ElectedMemberOnePage");
const ElectedMemberTwoPage = lazyImport(() => import("@/pages/About/council"), "ElectedMemberTwoPage");
const ElectedMemberFivePage = lazyImport(() => import("@/pages/About/council"), "ElectedMemberFivePage");
const ElectedMemberThreePage = lazyImport(() => import("@/pages/About/council"), "ElectedMemberThreePage");
const ElectedMemberFourPage = lazyImport(() => import("@/pages/About/council"), "ElectedMemberFourPage");
const ElectedMemberSixPage = lazyImport(() => import("@/pages/About/council"), "ElectedMemberSixPage");
const CBNRepPage = lazyImport(() => import("@/pages/About/council"), "CBNRepresentativePage");
const NPCRepPage = lazyImport(() => import("@/pages/About/council"), "NPCRepresentativePage");
const NBSRepPage = lazyImport(() => import("@/pages/About/council"), "NBSRepresentativePage");
const ManagingEditorPage = lazyImport(() => import("@/pages/About/council"), "ManagingEditorPage");
const AssociateEditorPage = lazyImport(() => import("@/pages/About/council"), "AssociateEditorPage");





function App() {

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy">
            <Route index element={<PolicyPage />} />
            {/* <Route path={RoutePath.TermsOfService} element={<TermsPage />} /> */}
          </Route>

          <Route path={RoutePath.AboutUs}>
            <Route index element={<AboutPage />} />
            <Route path={RoutePath.Objective} element={<ObjectivePage />} />
            <Route path={RoutePath.OurHistory} element={<HistoryPage />} />
            <Route path={RoutePath.StructureAndGovernance} element={<StructureAndGovernancePage />} />
            <Route path={RoutePath.Leadership} element={<Leadership />} />
            <Route path={RoutePath.ElectedCouncilMembers} element={<CoucilMembers />} />
            <Route path={RoutePath.Departments} element={<Departments />} />
            <Route path={RoutePath.Committee} element={<Committee />} />

            <Route path={RoutePath.EditorInChief} element={<EditorInChiefPage />} />
            <Route path={RoutePath.President} element={<PresidentPage />} />
            <Route path={RoutePath.VicePresident} element={<VicePresidentPage />} />
            <Route path={RoutePath.Registrar} element={<RegistrarPage />} />
            <Route path={RoutePath.ElectedMemberOne} element={<ElectedMemberOnePage />} />
            <Route path={RoutePath.ElectedMemberTwo} element={<ElectedMemberTwoPage />} />
            <Route path={RoutePath.ElectedMemberThree} element={<ElectedMemberThreePage />} />
            <Route path={RoutePath.ElectedMemberFour} element={<ElectedMemberFourPage />} />
            <Route path={RoutePath.ElectedMemberFive} element={<ElectedMemberFivePage />} />
            <Route path={RoutePath.ElectedMemberSix} element={<ElectedMemberSixPage />} />
            <Route path={RoutePath.CBNRepresentative} element={<CBNRepPage />} />
            <Route path={RoutePath.NPCRepresentative} element={<NPCRepPage />} />
            <Route path={RoutePath.NBSRepresentative} element={<NBSRepPage />} />
            <Route path={RoutePath.ManagingEditor} element={<ManagingEditorPage />} />
            <Route path={RoutePath.AssociateEditor} element={<AssociateEditorPage />} />
          </Route>

          <Route path={RoutePath.SecondQuarterPrs2026}>
            <Route index element={<CisonWorkshopPage />} />
          </Route>
          <Route path={RoutePath.OurPeople} >
            <Route index element={<Leadership />} />
          </Route>
        </Route>
      </Routes>
    </Suspense >
  )
}

export default App;
