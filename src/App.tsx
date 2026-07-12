import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import { Skeleton } from "./components/ui/skeleton";
import RoutePath from "./routes";
import { lazyImport } from "./lib/utils";
import FloatingDonateButton from "./components/Donate";

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
const ContactUsPage = lazy(() => import("@/pages/Privacy/contactus"));
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
const MentoringSchemePage = lazy(() => import("@/pages/About/mentoring-scheme"));
const ConsultancyServicesPage = lazy(() => import("@/pages/About/consultancy-service"));
const FellowPage = lazy(() => import("@/pages/About/fellows"));


// PRS
const CisonWorkshopPage = lazy(() => import("@/pages/PRS/2nd_2026"));
const Q3Q4PRS2026Page = lazy(() => import("@/pages/PRS/Q3_Q4_2026"));

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


// What we do
const AccreditationAndExam = lazy(() => import("@/pages/Wedo/accreditationandexam"));
const ProfessionalAccreditation = lazy(() => import("@/pages/Wedo/professionalaccreditation"));
const ProfessionalExamination = lazy(() => import("@/pages/Wedo/professionalexams"));
const CuririculumDevelopmentPage = lazy(() => import("@/pages/Wedo/curriculumdevelopment"));
const InstitutionalAccreditationPage = lazy(() => import("@/pages/Wedo/institutionaccreditation"));
const CourseAccreditationPage = lazy(() => import("@/pages/Wedo/courseaccreditation"));
const CPDPolicyPage = lazy(() => import("@/pages/Wedo/cpdpolicy"));

// Former
const CrownPrinceAbubakarBelloAfegbuaPage = lazyImport(() => import("@/pages/Members/former"), "CrownPrinceAbubakarBelloAfegbuaPage");


const MembershipPage = lazy(() => import("@/pages/Membership"));
const CharacteredStatisticianPage = lazy(() => import("@/pages/Membership/charactered-statistician"));
const AssociateStatistitianPage = lazy(() => import("@/pages/Membership/associate-statistician"));
const ExaminationAssociatePage = lazy(() => import("@/pages/Membership/examination-associate"));
const RegisteredStatisticianPage = lazy(() => import("@/pages/Membership/registered-statistician"));
const UndergraduateStudentMamberPage = lazy(() => import("@/pages/Membership/undergraduate-student-member"));
const CorporateStatisticianPage = lazy(() => import("@/pages/Membership/corporate-statistician"));

// Events
const Conference2026Page = lazy(() => import("@/pages/Events/2026conference"));
const EventPage = lazy(() => import("@/pages/Events/index"));
const SingleEvent = lazy(() => import("@/pages/Events/single-event"));
const JCISONPage = lazy(() => import("@/pages/Events/jcison-call-for-papers"));

// MISC
const Page404 = lazy(() => import('@/pages/MISC/404'));
const HowToPayPage = lazy(() => import("@/pages/MISC/how-to-pay"));
const AnnualFeesPage = lazy(() => import("@/pages/MISC/annual-fees"));
const WPADMINPage = lazy(() => import("@/pages/MISC/wp-admin"))


function App() {

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Page404 />} />
          <Route path={RoutePath.ContactUs} element={<ContactUsPage />} />
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
            <Route path={RoutePath.Fellows} element={<FellowPage />} />
            <Route path={RoutePath.ConsultancyService} element={<ConsultancyServicesPage />} />
            <Route path={RoutePath.MentoringScheme} element={<MentoringSchemePage />} />

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
            <Route path={RoutePath.CrownPrinceAbubakarBelloAfegbua} element={<CrownPrinceAbubakarBelloAfegbuaPage />} />
          </Route>

          <Route path={RoutePath.Accreditation}>
            <Route index element={<AccreditationAndExam />} />
            <Route path={RoutePath.ProfessionalAccreditation} element={<ProfessionalAccreditation />} />
            <Route path={RoutePath.CurriculumDevelopment} element={<CuririculumDevelopmentPage />} />
            <Route path={RoutePath.InstitutionalAccreditation} element={<InstitutionalAccreditationPage />} />
            <Route path={RoutePath.CourseAccreditation} element={<CourseAccreditationPage />} />
            <Route path={RoutePath.CPDPolicy} element={<CPDPolicyPage />} />
          </Route>

          <Route path={RoutePath.Examinations}>
            <Route index element={<ProfessionalExamination />} />
            <Route path={RoutePath.ProfessionalExamination} element={<ProfessionalExamination />} />
          </Route>

          <Route path={RoutePath.OurPeople} >
            <Route index element={<Leadership />} />
          </Route>

          <Route path={RoutePath.Membership}>
            <Route index element={<MembershipPage />} />
            <Route path={RoutePath.CharacterdStatistician} element={<CharacteredStatisticianPage />} />
            <Route path={RoutePath.AssociateStatistician} element={<AssociateStatistitianPage />} />
            <Route path={RoutePath.ExaminationAssociate} element={<ExaminationAssociatePage />} />
            <Route path={RoutePath.RegisteredStatistician} element={<RegisteredStatisticianPage />} />
            <Route path={RoutePath.Student} element={<UndergraduateStudentMamberPage />} />
            <Route path={RoutePath.Corporate} element={<CorporateStatisticianPage />} />
          </Route>

          <Route path={RoutePath.Event}>
            <Route index element={<EventPage />} />
            <Route path={RoutePath.Conference2026} element={<Conference2026Page />} />
            <Route path={RoutePath.SingleEvent} element={<SingleEvent />} />
            <Route path={RoutePath.SecondQuarterPrs2026} element={<CisonWorkshopPage />} />
            <Route path={RoutePath.ThirdFourthQuarterPRS2026} element={<Q3Q4PRS2026Page />} />
            <Route path={RoutePath.JCISONCallForPapers} element={<JCISONPage />} />
          </Route>

          <Route path={RoutePath.AnnualFees} element={<AnnualFeesPage />} />
          <Route path={RoutePath.HowToPay} element={<HowToPayPage />} />
          <Route path={RoutePath.WP_ADMIN} element={<WPADMINPage />} />

        </Route>
      </Routes>
      <FloatingDonateButton />
    </Suspense >
  )
}

export default App;
