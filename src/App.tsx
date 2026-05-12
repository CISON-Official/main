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


// PRS
const CisonWorkshopPage = lazy(() => import("@/pages/PRS/2nd_2026"));

// Council Members
const EditorInChiefPage = lazyImport(() => import("@/pages/About/council"), "EditorInChiefPage");



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
            <Route path={RoutePath.EditorInChief} element={<EditorInChiefPage />} />
            <Route path={RoutePath.ElectedCouncilMembers} element={<CoucilMembers />} />
            <Route path={RoutePath.Departments} element={<Departments />} />
          </Route>

          <Route path={RoutePath.SecondQuarterPrs2026}>
            <Route index element={<CisonWorkshopPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense >
  )
}

export default App;
