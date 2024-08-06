import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppLayout from './layouts/AppLayout.jsx';

import Home from './pages/Insurance/Home.jsx';
import PdfViewer from './pages/PdfViewer.jsx';
import LibPdfViewer from './pages/library/libraryPdfViewer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Verification from './pages/Verification.jsx';
import RegisterStartup from './pages/RegisterStartup';
import Apis from './pages/Apis';

import CAGR from './pages/Financial Calculators/Investmentcal/CAGR';
// import RdCal from './pages/Financial Calculators/Investmentcal/RdCal.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import ServicesPage from './pages/SevicesPage.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ImagePDF from './pages/EasyServices/Converter/ImagePdf';

import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import PdfViewer1 from './pages/PdfViewer1.jsx';
import CreateLibrary from './pages/library/CreateLibrary.jsx';

const VerifyPanDetails = lazy(
  () => import('./pages/EasyServices/IncomeTaxLinks/VerifyPanDetails.jsx'),
);
const CheckPanAadhaarStatus = lazy(
  () => import('./pages/EasyServices/IncomeTaxLinks/CheckPanAadhaarStatus.jsx'),
);
const SearchTan = lazy(
  () => import('./pages/EasyServices/IncomeTaxLinks/SearchTan.jsx'),
);
const VerifyBankDetails = lazy(
  () => import('./pages/EasyServices/BankLinks/VerifyBankDetails.jsx'),
);
const UpiVerify = lazy(
  () => import('./pages/EasyServices/BankLinks/UpiVerify.jsx'),
);
const CompanyDetails = lazy(
  () => import('./pages/EasyServices/MCA/CompanyDetails.jsx'),
);
const DirectorDetails = lazy(
  () => import('./pages/EasyServices/MCA/DirectorDetails.jsx'),
);
const AadhaarVerify = lazy(
  () => import('./pages/EasyServices/Aadhaar/AadhaarVerify.jsx'),
);
const AadhaarLinkStatus = lazy(
  () => import('./pages/EasyServices/Aadhaar/AadhaarLinkStatus.jsx'),
);
const DmateLayout = lazy(() => import('./layouts/DmateLayout.jsx'));
const Dmate = lazy(() => import('./pages/EasyInvest/Dmate/Dmate.jsx'));
const StarHealth = lazy(
  () => import('./components/DmateAccount/StarHealth/StarHealth.jsx'),
);
const LIC = lazy(() => import('./components/DmateAccount/LIC/LIC.jsx'));
const CapitalGainBond = lazy(
  () => import('./components/DmateAccount/CapitalGainBond/CapitalGainBond.jsx'),
);
const FixedPlans = lazy(
  () => import('./components/DmateAccount/Fixed Plans/FixedPlans.jsx'),
);
const BajajCapital = lazy(
  () => import('./components/DmateAccount/Bajaj Capital/BajajCapital.jsx'),
);

const DownloadIndex = lazy(() => import('./pages/Downloads/DownloadIndex.jsx'));
const Goldsilverrate = lazy(
  () => import('./pages/Downloads/Goldsilverrate.jsx'),
);
const BussinessCodecForITRForms = lazy(
  () => import('./pages/Downloads/BussinessCodecForITRForms.jsx'),
);
const Newcostinflationindex = lazy(
  () => import('./pages/Downloads/Newcostinflationindex.jsx'),
);
const Costinflationindex = lazy(
  () => import('./pages/Downloads/Costinflationindex.jsx'),
);
const Statuswiseincometaxcodepan = lazy(
  () => import('./pages/Downloads/Statuswiseincometaxcodepan.jsx'),
);
const GSTR_1 = lazy(
  () => import('./pages/GSTR/GSTRPages/Gstr1/GSTR_1_Add_Record_Details.jsx'),
);

const Softwarelicence = lazy(() => import('./pages/Softwarelicense.jsx'));
const DisclaimerPolicy = lazy(() => import('./pages/DisclaimerPolicy.jsx'));
const Tnc = lazy(() => import('./pages/Tnc.jsx'));
const PrivateRoutes = lazy(() => import('./components/PrivateRoute'));
const Form16 = lazy(() => import('./pages/Downloads/Form16.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
// const Depreciationtable = lazy(() =>
//     import('./pages/Downloads/Depreciationtable.jsx')
// );
const InterestaccruedonIndira = lazy(
  () => import('./pages/Downloads/InterestaccruedonIndira.jsx'),
);
const InterestaccruedonnationalVIIIth = lazy(
  () => import('./pages/Downloads/InterestaccruedonnationalVIIIth.jsx'),
);
const Interestaccruedonnationalxith = lazy(
  () => import('./pages/Downloads/Interestaccruedonnationalxith.jsx'),
);
const Wordkvp = lazy(() => import('./pages/Downloads/Wordkvp.jsx'));
const Countrycode = lazy(() => import('./pages/Downloads/Countrycode.jsx'));
const ContactUs = lazy(() => import('./pages/Company/ContactUs.jsx'));
const EasyInvestIndex = lazy(
  () => import('./pages/EasyInvest/EasyInvestIndex.jsx'),
);
const Career = lazy(() => import('./pages/Career.jsx'));
const About = lazy(() => import('./pages/Company/About_page/About'));
const FileItr = lazy(() => import('./pages/FileItr.jsx'));
const SimpleInterestCal = lazy(
  () =>
    import(
      './pages/Financial Calculators/BankCalculators/SimpleInterestCal.jsx'
    ),
);
const CompoundInterestCal = lazy(
  () =>
    import(
      './pages/Financial Calculators/BankCalculators/CompoundInterestCal.jsx'
    ),
);
const HraCal = lazy(
  () => import('./pages/Financial Calculators/IncomeTaxCalculators/HraCal.jsx'),
);
const DepreciationCal = lazy(
  () =>
    import(
      './pages/Financial Calculators/IncomeTaxCalculators/DepreciationCal.jsx'
    ),
);
const CapitalGainCalc = lazy(
  () =>
    import(
      './pages/Financial Calculators/IncomeTaxCalculators/CapitalGainCal.jsx'
    ),
);

const GstCal = lazy(
  () => import('./pages/Financial Calculators/GstCal/GstCal.jsx'),
);
const PostofficeCal = lazy(
  () => import('./pages/Financial Calculators/Investmentcal/PostofficeCal.jsx'),
);
const RdCal = lazy(
  () => import('./pages/Financial Calculators/Investmentcal/RdCal.jsx'),
);
const FdCal = lazy(
  () => import('./pages/Financial Calculators/Investmentcal/FdCal.jsx'),
);
const LumpSumpCal = lazy(
  () => import('./pages/Financial Calculators/Investmentcal/LumpSumpCal.jsx'),
);
const BusinessCal = lazy(
  () => import('./pages/Financial Calculators/LoanCalculators/BusinessCal.jsx'),
);
const NpsCal = lazy(
  () => import('./pages/Financial Calculators/InsuranceCalculatos/NpsCal.jsx'),
);
const PersonalCal = lazy(
  () => import('./pages/Financial Calculators/LoanCalculators/PersonalCal.jsx'),
);
const HomeLoanCal = lazy(
  () => import('./pages/Financial Calculators/LoanCalculators/HomeLoanCal.jsx'),
);

const AdvanceTaxCal = lazy(
  () =>
    import('./pages/Financial Calculators/IncomeTaxCalculators/AdvanceTaxCal'),
);
const TaxCalculator = lazy(
  () =>
    import('./pages/Financial Calculators/IncomeTaxCalculators/TaxCalculator'),
);

const LoanAgainstProperty = lazy(
  () =>
    import(
      './pages/Financial Calculators/LoanCalculators/LoanAgainstProperty.jsx'
    ),
);
const CarloanCal = lazy(
  () => import('./pages/Financial Calculators/LoanCalculators/CarloanCal.jsx'),
);
const SipCal = lazy(
  () => import('./pages/Financial Calculators/Investmentcal/SipCal.jsx'),
);
const Searchbygstin = lazy(
  () => import('./pages/EasyServices/GstLinks/Searchbygstin.jsx'),
);
const Searchbypan = lazy(
  () => import('./pages/EasyServices/GstLinks/Searchbypan.jsx'),
);
const Trackgstreturn = lazy(
  () => import('./pages/EasyServices/GstLinks/Trackgstreturn.jsx'),
);
const IfscDetails = lazy(
  () => import('./pages/EasyServices/BankLinks/IfscDetails.jsx'),
);
const Library = lazy(() => import('./pages/library/library'));
const IndividualLibraryPage = lazy(
  () => import('./pages/library/individualLibraryPage'),
);
// const createLibrary=lazy(()=>import('./pages/library/CreateLibrary.jsx'))

// Services

const ImgToPdf = lazy(
  () => import('./pages/EasyServices/Converter/ImgToPdf.jsx'),
);
const MergePdf = lazy(
  () => import('./pages/EasyServices/Converter/MergePdf.jsx'),
);
const PincodeByCity = lazy(
  () => import('./pages/EasyServices/PostOffice/PIncodebyCity'),
);
const PincodeInfo = lazy(
  () => import('./pages/EasyServices/PostOffice/PincodeInfo'),
);

// Register a Startup
// const PFRegistration = lazy(() => import('./pages/Startup/PFRegistration'));
// const ESIRegistration = lazy(() => import('./pages/Startup/ESIRegistration'));
// const DSC = lazy(() => import('./pages/Startup/DSC'));
// const LincenseRegistration = lazy(() =>
//     import('./pages/Startup/LincenseRegistration')
// );
// const FSSAI = lazy(() => import('./pages/Startup/FSSAI'));
// const ProfessionalTaxRegistration = lazy(() =>
//     import('./pages/Startup/ProfessionalTaxRegistration')
// );
// const MSMERegistration = lazy(() => import('./pages/Startup/MSMERegistration'));
// const PartnershipRegistration = lazy(() =>
//     import('./pages/Startup/PartnershipRegistration')
// );
// const NGORegistration = lazy(() => import('./pages/Startup/NGORegistration'));
// const TrustRegistration = lazy(() =>
//     import('./pages/Startup/TrustRegistration')
// );
// const IELicensePartnership = lazy(() =>
//     import('./pages/Startup/IELicensePartnership')
// );
// const TradeMarkRenewal = lazy(() => import('./pages/Startup/TradeMarkRenewal'));
// const CopyRightRegistration = lazy(() =>
//     import('./pages/Startup/CopyRightRegistration')
// );
// const ISORegistration = lazy(() => import('./pages/Startup/ISORegistration'));
// const CopyrightReply = lazy(() => import('./pages/Startup/CopyrightReply'));
// const AssociationFormation = lazy(() =>
//     import('./pages/Startup/AssociationFormation')
// );
// const TrademarkReply = lazy(() => import('./pages/Startup/TrademarkReply'));
// const TrademarkObjection = lazy(() =>
//     import('./pages/Startup/TrademarkObjection')
// );
// const TrademarkOpposition = lazy(() =>
// import('./pages/Startup/TrademarkOpposition')
// );
// const NewsPaperRegistration = lazy(() =>
//     import('./pages/Startup/NewsPaperRegistration')
// );
// const GSTRegistration = lazy(() => import('./pages/Startup/GSTRegistration'));
// const ShopActRegistration = lazy(() =>
//     import('./pages/Startup/ShopActRegistration')
// );
// const RationCard = lazy(() => import('./pages/Startup/RationCard'));
// const FireLicenseRegistration = lazy(() =>
//     import('./pages/Startup/FireLicenseRegistration')
// );
// const AdvertisementAgency = lazy(() =>
//     import('./pages/Startup/AdvertisementAgency')
// );
// const NidhiCompany = lazy(() => import('./pages/Startup/NidhiCompany'));
// const CompanyRegistration = lazy(() =>
//     import('./pages/Startup/CompanyRegistration')
// );
// const TANRegistration = lazy(() => import('./pages/Startup/TANRegistration'));
// const CorporationLicense = lazy(() =>
//     import('./pages/Startup/CorporationLicense')
// );
// const RegisteredOfficeChange = lazy(() =>
//     import('./pages/Startup/RegisteredOfficeChange')
// );
// const ShareAllotment = lazy(() => import('./pages/Startup/ShareAllotment'));
// const LLPRegistration = lazy(() => import('./pages/Startup/LLPRegistration'));
// const OPCRegistration = lazy(() => import('./pages/Startup/OPCRegistration'));
// const TDSReturn = lazy(() => import('./pages/Startup/TDSReturn'));
// const PFReturn = lazy(() => import('./pages/Startup/PFReturn'));
// const ESIReturn = lazy(() => import('./pages/Startup/ESIReturn'));
// const GSTReturn = lazy(() => import('./pages/Startup/GSTReturn'));
// const Accounting = lazy(() => import('./pages/Startup/Accounting'));
// const Audit44AD = lazy(() => import('./pages/Startup/Audit44AD'));
// const Audit44ADA = lazy(() => import('./pages/Startup/Audit44ADA'));
// const Audit44AE = lazy(() => import('./pages/Startup/Audit44AE'));

// Apis
const ApiDocs = lazy(() => import('./pages/ApiDocs'));

// ITR
const ITRLayout = lazy(() => import('./layouts/ITRLayout.jsx'));
const UploadForm16 = lazy(() => import('./pages/ITR/UploadForm16'));
const ITRPresonalInfo = lazy(() => import('./pages/ITR/ITRPresonalInfo'));
const ITRIncomeSources = lazy(() => import('./pages/ITR/ITRIncomeSources'));
const ITRDeductions = lazy(() => import('./pages/ITR/ITRDeductions'));
const ITRTaxPayAble = lazy(() => import('./pages/ITR/ITRTaxPayAble.jsx'));
const ITRTaxesPaid = lazy(() => import('./pages/ITR/ITRTaxesPaid'));
const ITRTaxesFilling = lazy(() => import('./pages/ITR/ITRTaxesFilling'));
const ITRForm16 = lazy(() => import('./pages/ITR/ITRForm16'));
const UploadFiles = lazy(() => import('./pages/UploadFile'));

// Blog
const Blogs = lazy(() => import('./pages/Blogs/Blogs'));
const BlogIndividualPage = lazy(
  () => import('./pages/Blogs/BlogIndividualPage'),
);

// business profile pages
const BusinessProfile = lazy(
  () => import('./pages/businessProfile/ProfilePage'),
);
const UserProfile = lazy(() => import('./pages/Profiles/UserProfile.jsx'));

// Loan Application
const LoanDashboardLayout = lazy(
  () => import('./pages/Loan/LoanDashboardLayout'),
);
const ApplyBikeLoan = lazy(
  () => import('./pages/Loan/components/ApplyBikeLoan.jsx'),
);
const ApplyCarLoan = lazy(
  () => import('./pages/Loan/components/ApplyCarLoan.jsx'),
);
const ApplyHomeLoan = lazy(
  () => import('./pages/Loan/components/ApplyHomeLoan.jsx'),
);
const ApplyPersonalLoan = lazy(
  () => import('./pages/Loan/components/ApplyPersonalLoan.jsx'),
);
const ApplyEducationLoan = lazy(
  () => import('./pages/Loan/components/ApplyEducationLoan.jsx'),
);
const ApplyBusinessLoan = lazy(
  () => import('./pages/Loan/components/ApplyBusinessLoan.jsx'),
);
import LoanBankDetails from './pages/Loan/components/LoanBankDetails.jsx';
import bikeLoanDocuments from './pages/Loan/components/bikeLoanDocuments.jsx';
import carLoanDosuments from './pages/Loan/components/carLoanDosuments.jsx';
import buisnessLoanDocuments from './pages/Loan/components/buisnessLoanDocuments.jsx';
import educationLoanDocuments from './pages/Loan/components/educationLoanDocuments.jsx';
import homeLoanDocuments from './pages/Loan/components/homeLoanDocuments.jsx';
import personalLoanDocuments from './pages/Loan/components/personalLoanDocuments.jsx';

//Fastag
const FastagForm = lazy(() => import('./pages/Fastag/Fastag.jsx'));

// Insurance
const Insurance = lazy(() => import('./pages/Insurance/Insurance.jsx'));
const bikeInsuranceForm = lazy(
  () => import('./pages/Insurance/Components/bikeInsuranceForm.jsx'),
);
const carInsuranceForm = lazy(
  () => import('./pages/Insurance/Components/carInsuranceForm.jsx'),
);
const healthInsuranceForm = lazy(
  () => import('./pages/Insurance/Components/healthInsuranceForm.jsx'),
);
const selectInsuranceProvider = lazy(
  () => import('./pages/Insurance/Components/selectBankDetails.jsx'),
);
const CarInsurancePlan = lazy(
  () => import('./pages/Insurance/Components/carInsurancePlan.jsx'),
);
const BikeInsurancePlan = lazy(
  () => import('./pages/Insurance/Components/bikeInsurancePlan.jsx'),
);
const HealthInsurancePlan = lazy(
  () => import('./pages/Insurance/Components/healthInsurancePlan.jsx'),
);

// Payment and checkout
const Cart = lazy(() => import('./pages/Cart.jsx'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout.jsx'));
const PaymentSuccess = lazy(() => import('./pages/payment-success.jsx'));
const PaymentFailure = lazy(() => import('./pages/payment-failure.jsx'));

// Dashboard
// const DashboardLayout = lazy(() => import("./layouts/DashboardLayout.jsx"));

// GSTR
const PermanentInformation = lazy(
  () => import('./pages/GSTR/GSTRPages/PermanentInformation.jsx'),
);
const LoginWithGSTIN = lazy(
  () => import('./pages/GSTR/GSTRPages/loginWithGSTIN/LoginWithGSTIN.jsx'),
);
const CheckReturnStatus = lazy(
  () =>
    import('./pages/GSTR/GSTRPages/checkReturnStatus/CheckReturnStatus.jsx'),
);

const GSTR = lazy(() => import('./pages/GSTR/GSTR.jsx'));
const ProjectReport = lazy(() => import('./pages/reports/ProjectReport.jsx'));

const PdfViewer_projectReport = lazy(
  () => import('./pages/PdfViewer_projectReport.jsx'),
);

const Invoice = lazy(() => import('./pages/invoice/Invoice.jsx'));

// accounts
const Accounts = lazy(
  () => import('./pages/Dashboard/shared/accounts/Accounts.jsx'),
);
import Items from './pages/Dashboard/shared/accounts/subPages/Items.jsx';
import AllParties from './pages/Dashboard/shared/accounts/subPages/AllParties.jsx';
import Reports from './pages/Dashboard/shared/accounts/subPages/Reports.jsx';
import Sales from './pages/Dashboard/shared/accounts/subPages/Sales.jsx';
import Purchase from './pages/Dashboard/shared/accounts/subPages/Purchase.jsx';
import Expense from './pages/Dashboard/shared/accounts/subPages/Expense.jsx';
import Cash_Bank from './pages/Dashboard/shared/accounts/subPages/Cash_Bank.jsx';

const TotalBalance = lazy(
  () => import('./pages/invoice/subPages/TotalBalance.jsx'),
);
const InvoiceGenerator = lazy(
  () => import('./pages/invoice/subPages/InvoiceGenerator.jsx'),
);

/*new Dashboard */
import Dashboard_Layout from './layouts/Dashboard_Layout.jsx';
import OutwardSupplies from './pages/GSTR/GSTRPages/OutwardSupplies/OutwardSupplies.jsx';
import InwardSupplies from './pages/GSTR/GSTRPages/InwardSupplies/InwardSupplies.jsx';
import User_Invoice_Account_Balance from './pages/Dashboard/user/UserInvoice/Account_Balance/User_Invoice_Account_Balance.jsx';
import Add_Parties from './pages/Dashboard/user/UserInvoice/Parties/Add_Parties.jsx';
import Parties_Index from './pages/Dashboard/user/UserInvoice/Parties/Parties_Index.jsx';
import Items_Index from './pages/Dashboard/user/UserInvoice/Items/Items_Index.jsx';
import Purchase_Index from './pages/Dashboard/user/UserInvoice/Purchase/Purchase_Index.jsx';
import Sales_Index from './pages/Dashboard/user/UserInvoice/Sales/Sales_Index.jsx';
import User_Invoice_Transactions from './pages/Dashboard/user/UserInvoice/Invoice_Transactions/User_Invoice_Transactions.jsx';
import Invoice_Transaction_Recipt_widget from './pages/Dashboard/user/UserInvoice/Invoice_Transactions/Invoice_Transaction_Recipt_widget.jsx';
import Invoice_Transaction_Payment_widget from './pages/Dashboard/user/UserInvoice/Invoice_Transactions/Invoice_Transaction_Payment_widget.jsx';
import Invoice_Transaction_Cash_widget from './pages/Dashboard/user/UserInvoice/Invoice_Transactions/Invoice_Transaction_Cash_widget.jsx';
import Invoice_Transaction_Bank_widget from './pages/Dashboard/user/UserInvoice/Invoice_Transactions/Invoice_Transaction_Bank_widget.jsx';
import Add_Items from './pages/Dashboard/user/UserInvoice/Items/Add_Items.jsx';
import Create_Purchase from './pages/Dashboard/user/UserInvoice/Purchase/Create_Purchase.jsx';
import Create_Sales from './pages/Dashboard/user/UserInvoice/Sales/Create_Sales.jsx';
import Loan_Index from './pages/Dashboard/user/Finance/Loan/Loan_Index.jsx';
import Apply_Loan from './pages/Dashboard/user/Finance/Loan/Apply_Loan.jsx';
import Create_Loan from './pages/Dashboard/user/Finance/Loan/Create_Loan.jsx';
import Payment_index from './pages/Dashboard/user/Finance/Payment/Payment_index.jsx';
import View_Payment from './pages/Dashboard/user/Finance/Payment/View_Payment.jsx';
import Project_Report from './pages/Dashboard/user/Reports/Project_Report/Project_Report.jsx';

import Invoice_Dashboard from './pages/Dashboard/superAdmin/invoice/Invoice_Dashboard.jsx';
import Finance_Dashboard from './pages/Dashboard/superAdmin/finance/Finance_Dashboard.jsx';
import Transaction_Dashboard from './pages/Dashboard/superAdmin/transaction/Transaction_Dashboard.jsx';
import Reports_Dashboard from './pages/Dashboard/superAdmin/reports/Reports_Dashboard.jsx';
import BillPayment_Dashboard from './pages/Dashboard/superAdmin/billPayment/BillPayment_Dashboard.jsx';
import WebSettings_Dashboard from './pages/Dashboard/superAdmin/webSettings/WebSettings_Dashboard.jsx';
import Settings_Dashboard from './pages/Dashboard/superAdmin/settings/Settings.jsx';
import AllUsers from './pages/Dashboard/superAdmin/[subPages]/AllUsers.jsx';
import ActiveUsers from './pages/Dashboard/superAdmin/[subPages]/ActiveUsers.jsx';
import Non_ActiveUsers from './pages/Dashboard/superAdmin/[subPages]/Non_ActiveUsers.jsx';
import Edit_Footer from './pages/Dashboard/superAdmin/webSettings/edit/Edit_Footer.jsx';
import Edit_HomePage from './pages/Dashboard/superAdmin/webSettings/edit/Edit_HomePage.jsx';
import Edit_Blogs from './pages/Dashboard/superAdmin/webSettings/edit/Edit_Blogs.jsx';
import Edit_services from './pages/Dashboard/superAdmin/webSettings/edit/Edit_services.jsx';
import Edit_ELibrary from './pages/Dashboard/superAdmin/webSettings/edit/Edit_ELibrary.jsx';
import Edit_Career from './pages/Dashboard/superAdmin/webSettings/edit/Edit_Career.jsx';
import BajajCapital_dashboard from './pages/Dashboard/shared/easyInvestment/insurance/bajajCapital/BajajCapital_dashboard.jsx';
import SaleInsurance from './pages/Dashboard/shared/easyInvestment/insurance/saleInsurance/SaleInsurance.jsx';
import SalesForm from './pages/Dashboard/shared/easyInvestment/insurance/saleInsurance/salesComponents/SalesForm.jsx';
import SelectInsurance from './pages/Dashboard/admin/easyInvestment/insurance/SelectInsurance.jsx';
import CreateInsurance from './pages/Dashboard/admin/easyInvestment/insurance/LIC/CreateInsurance.jsx';
import HealthSteps from './pages/Dashboard/admin/easyInvestment/insurance/LIC/health/HealthSteps.jsx';
import SelectInsuranceType from './pages/Dashboard/admin/easyInvestment/insurance/SelectInsuranseType.jsx';
import Plans from './pages/Dashboard/admin/easyInvestment/insurance/LIC/health/plans/ViewPlans.jsx';
import Depreciationtable from './pages/Downloads/Depreciationtable.jsx';

const Dashboard = lazy(
  () => import('./pages/Dashboard/superAdmin/Dashboard.jsx'),
);
const Users_Dashboard = lazy(
  () => import('./pages/Dashboard/user/Users_Dashboard.jsx'),
);

// dashboard/accounts
const Services = lazy(() => import('./pages/myAccount/services/services.jsx'));
const Orders = lazy(() => import('./pages/myAccount/orders/Orders.jsx'));
const Payments = lazy(() => import('./pages/myAccount/payments/Payments.jsx'));

const PrivateAccessRoute = lazy(() => import('./PrivateAccessRoute.jsx'));
//easyInvestment
const InsuranceTypes_superAdmin = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/InsuranceTypes_superAdmin.jsx'
    ),
);
const LifeInsurance_superAdmin = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LifeInsurance_superAdmin.jsx'
    ),
);
const GeneralInsurance_superAdmin = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/GeneralInsurance_superAdmin.jsx'
    ),
);

const LIC_Dashboard = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LIC/LIC_Dashboard.jsx'
    ),
);
const CreateAgent_LIC = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LIC/CreateAgent_LIC.jsx'
    ),
);
const Product_LIC = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LIC/Product_LIC.jsx'
    ),
);
const Customer_LIC = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LIC/Customer_LIC.jsx'
    ),
);
const Application_LIC = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LIC/Application_LIC.jsx'
    ),
);
const PremiumPayment_LIC = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LIC/PremiumPayment_LIC.jsx'
    ),
);
const Claims_LIC = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LIC/Claims_LIC.jsx'
    ),
);
const Performance_LIC = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/LIC/Performance_LIC.jsx'
    ),
);

const StarHealth_Dashboard = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/StarHealth_Dashboard.jsx'
    ),
);
const CreateAgent_StarHealth = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/CreateAgent_StarHealth.jsx'
    ),
);
const Policy_StarHealth = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/Policy_StarHealth.jsx'
    ),
);
const PolicyHolder_StarHealth = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/PolicyHolder_StarHealth.jsx'
    ),
);
const Customer_StarHealth = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/Customer_StarHealth.jsx'
    ),
);
const Application_StarHealth = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/Application_StarHealth.jsx'
    ),
);
const PremiumPayment_StarHealth = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/PremiumPayment_StarHealth.jsx'
    ),
);
const Claims_StarHealth = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/Claims_StarHealth.jsx'
    ),
);
const Performance_StarHealth = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/starHealth/Performance_StarHealth.jsx'
    ),
);

const PostOffice_Dashboard = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/postOffice/PostOffice_Dashboard.jsx'
    ),
);
const Users_postOffice = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/postOffice/Users_postOffice.jsx'
    ),
);
const RecurringDeposits_postOffice = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/postOffice/RecurringDeposits_postOffice.jsx'
    ),
);
const Payments_postOffice = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/postOffice/Payments_postOffice.jsx'
    ),
);
const BankAccount_postOffice = lazy(
  () =>
    import(
      './pages/Dashboard/superAdmin/easyInvestment/insurance/postOffice/BankAccount_postOffice.jsx'
    ),
);

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: 'contactus',
          element: <ContactUs />,
        },
        {
          path: '/career',
          element: <Career />,
        },
        {
          path: '/privacy-policy',
          element: <PrivacyPolicy />,
        },
        {
          path: '/tc',
          element: <Tnc />,
        },
        {
          path: '/easyinvest',
          element: <EasyInvestIndex />,
        },
        {
          path: '/disclainerpolicy',
          element: <DisclaimerPolicy />,
        },
        {
          path: '/softwarelicense',
          element: <Softwarelicence />,
        },
        // Financial Calculators
        {
          path: 'financialcal/sical',
          element: <PrivateRoutes Components={SimpleInterestCal} />,
        },
        {
          path: 'financialcal/cical',
          element: <PrivateRoutes Components={CompoundInterestCal} />,
        },
        {
          path: 'financialcal/Cagr',
          element: <PrivateRoutes Components={CAGR} />,
        },
        {
          path: 'financialcal/hracal',
          element: <PrivateRoutes Components={HraCal} />,
        },
        {
          path: 'financialcal/capitalGainCalc',
          element: <PrivateRoutes Components={CapitalGainCalc} />,
        },
        {
          path: '/financialcal/advanceTaxCal',
          element: <PrivateRoutes Components={AdvanceTaxCal} />,
        },
        {
          path: '/financialcal/TaxCalculator',
          element: <PrivateRoutes Components={TaxCalculator} />,
        },
        {
          path: '/financialcal/depCalc',
          element: <PrivateRoutes Components={DepreciationCal} />,
        },
        {
          path: 'library',
          element: <PrivateRoutes Components={Library} />,
        },
        {
          path: 'library/:id',
          element: <PrivateRoutes Components={IndividualLibraryPage} />,
        },
        {
          path: 'library/create',
          element: <PrivateRoutes Components={CreateLibrary} />,
        },
        {
          path: '/fastag',
          element: <FastagForm />,
          children: [],
        },
        {
          path: 'financialcal/gstcal',
          element: <PrivateRoutes Components={GstCal} />,
        },
        {
          path: 'financialcal/miscal',
          element: <PrivateRoutes Components={PostofficeCal} />,
        },
        {
          path: 'financialcal/rdcal',
          element: <PrivateRoutes Components={RdCal} />,
        },
        {
          path: 'financialcal/fdcal',
          element: <PrivateRoutes Components={FdCal} />,
        },
        {
          path: 'financialcal/lumpsumpcal',
          element: <PrivateRoutes Components={LumpSumpCal} />,
        },
        {
          path: 'financialcal/sipcal',
          element: <PrivateRoutes Components={SipCal} />,
        },
        {
          path: 'financialcal/businesscal',
          element: <PrivateRoutes Components={BusinessCal} />,
        },
        {
          path: 'financialcal/carloancal',
          element: <PrivateRoutes Components={CarloanCal} />,
        },
        {
          path: 'financialcal/loanagainstcal',
          element: <PrivateRoutes Components={LoanAgainstProperty} />,
        },
        {
          path: 'financialcal/homeloancal',
          element: <PrivateRoutes Components={HomeLoanCal} />,
        },
        {
          path: 'financialcal/personalloancal',
          element: <PrivateRoutes Components={PersonalCal} />,
        },
        {
          path: 'financialcal/npscal',
          element: <PrivateRoutes Components={NpsCal} />,
        },
        // Easy Services
        {
          path: 'easyservice/searchbygstin',
          element: <PrivateRoutes Components={Searchbygstin} />,
        },
        {
          path: 'easyservice/searchbypan',
          element: <PrivateRoutes Components={Searchbypan} />,
        },
        {
          path: 'easyservice/trackgstreturn',
          element: <PrivateRoutes Components={Trackgstreturn} />,
        },
        {
          path: 'easyservice/ifscdetails',
          element: <PrivateRoutes Components={IfscDetails} />,
        },
        {
          path: 'easyservice/verifybankdetails',
          element: <PrivateRoutes Components={VerifyBankDetails} />,
        },
        {
          path: 'easyservice/upiverify',
          element: <PrivateRoutes Components={UpiVerify} />,
        },
        {
          path: 'easyservice/companydetails',
          element: <PrivateRoutes Components={CompanyDetails} />,
        },
        {
          path: 'easyservice/companydirectordetails',
          element: <PrivateRoutes Components={DirectorDetails} />,
        },
        {
          path: 'easyservice/aadhaar-verify',
          element: <PrivateRoutes Components={AadhaarVerify} />,
        },
        {
          path: 'easyservice/aadhaar-link-status',
          element: <PrivateRoutes Components={AadhaarLinkStatus} />,
        },
        {
          path: 'easyservice/pincodebycity',
          element: <PrivateRoutes Components={PincodeByCity} />,
        },
        {
          path: 'easyservice/pincodeinfo',
          element: <PrivateRoutes Components={PincodeInfo} />,
        },
        {
          path: 'services/converter/image-to-pdf',
          element: <PrivateRoutes Components={ImgToPdf} />,
        },
        {
          path: 'services/converter/merge-pdf',
          element: <PrivateRoutes Components={MergePdf} />,
        },
        {
          path: 'services/incometaxlinks/verifypandetails',
          element: <PrivateRoutes Components={VerifyPanDetails} />,
        },
        {
          path: 'services/incometaxlinks/checkpanaashaarstatus',
          element: <PrivateRoutes Components={CheckPanAadhaarStatus} />,
        },

        {
          path: 'services/incometaxlinks/searchtan',
          element: <PrivateRoutes Components={SearchTan} />,
        },
        // Register a Startup

        {
          path: 'register-startup',
          element: <PrivateRoutes Components={RegisterStartup} />,
        },
        {
          path: `register-startup/:id`,
          element: <PrivateRoutes Components={ServicesPage} />,
        },
        //// business profile

        // {
        //     path: 'register-startup/pf-registration',
        //     element: <PrivateRoutes Components={PFRegistration} />,
        // },
        // {
        //     path: 'register-startup/esi-registration',
        //     element: <PrivateRoutes Components={ESIRegistration} />,
        // },
        // {
        //     path: 'register-startup/dsc',
        //     element: <PrivateRoutes Components={DSC} />,
        // },
        // {
        //     path: 'register-startup/license-registration',
        //     element: (
        //         <PrivateRoutes Components={LincenseRegistration} />
        //     ),
        // },
        // {
        //     path: 'register-startup/fssai',
        //     element: <PrivateRoutes Components={FSSAI} />,
        // },
        // {
        //     path: 'register-startup/professional-tax-registration',
        //     element: <ProfessionalTaxRegistration />,
        // },
        // {
        //     path: 'register-startup/msme-registration',
        //     element: <MSMERegistration />,
        // },
        // {
        //     path: 'register-startup/partnership-registration',
        //     element: <PartnershipRegistration />,
        // },
        // {
        //     path: 'register-startup/trade-mark-renewal',
        //     element: <TradeMarkRenewal />,
        // },
        // {
        //     path: 'register-startup/copy-right-registration',
        //     element: <CopyRightRegistration />,
        // },
        // {
        //     path: 'register-startup/iso-registration',
        //     element: <ISORegistration />,
        // },
        // {
        //     path: 'register-startup/copyright-reply',
        //     element: <CopyrightReply />,
        // },
        // {
        //     path: 'register-startup/news-paper-registration',
        //     element: <NewsPaperRegistration />,
        // },
        // {
        //     path: 'register-startup/gst-registration',
        //     element: <PrivateRoutes Components={GSTRegistration} />,
        // },
        // {
        //     path: 'register-startup/shop-act-registration',
        //     element: <PrivateRoutes Components={ShopActRegistration} />,
        // },
        // {
        //     path: 'register-startup/ration-card',
        //     element: <PrivateRoutes Components={RationCard} />,
        // },
        // {
        //     path: 'register-startup/fire-license-registration',
        //     element: (
        //         <PrivateRoutes Components={FireLicenseRegistration} />
        //     ),
        // },
        // {
        //     path: 'register-startup/advertisement-agency',
        //     element: <PrivateRoutes Components={AdvertisementAgency} />,
        // },
        // {
        //     path: 'register-startup/nidhi-company',
        //     element: <PrivateRoutes Components={NidhiCompany} />,
        // },
        // {
        //     path: 'register-startup/company-registration',
        //     element: <PrivateRoutes Components={CompanyRegistration} />,
        // },
        // {
        //     path: 'register-startup/tan-registration',
        //     element: <PrivateRoutes Components={TANRegistration} />,
        // },
        // {
        //     path: 'register-startup/corporation-license',
        //     element: <PrivateRoutes Components={CorporationLicense} />,
        // },
        // {
        //     path: 'register-startup/registered-office-change',
        //     element: (
        //         <PrivateRoutes Components={RegisteredOfficeChange} />
        //     ),
        // },
        // {
        //     path: 'register-startup/share-allotment',
        //     element: <PrivateRoutes Components={ShareAllotment} />,
        // },
        // {
        //     path: 'register-startup/llp-registration',
        //     element: <PrivateRoutes Components={LLPRegistration} />,
        // },
        // {
        //     path: 'register-startup/opc-registration',
        //     element: <PrivateRoutes Components={OPCRegistration} />,
        // },
        // {
        //     path: 'register-startup/tds-return',
        //     element: <PrivateRoutes Components={TDSReturn} />,
        // },
        // {
        //     path: 'register-startup/pf-return',
        //     element: <PrivateRoutes Components={PFReturn} />,
        // },
        // {
        //     path: 'register-startup/esi-return',
        //     element: <PrivateRoutes Components={ESIReturn} />,
        // },
        // {
        //     path: 'register-startup/gst-return',
        //     element: <PrivateRoutes Components={GSTReturn} />,
        // },
        // {
        //     path: 'register-startup/accounting',
        //     element: <PrivateRoutes Components={Accounting} />,
        // },
        // {
        //     path: 'register-startup/audit-44AD',
        //     element: <PrivateRoutes Components={Audit44AD} />,
        // },
        // {
        //     path: 'register-startup/audit-44ADA',
        //     element: <PrivateRoutes Components={Audit44ADA} />,
        // },
        // {
        //     path: 'register-startup/audit-44AAE',
        //     element: <PrivateRoutes Components={Audit44AE} />,
        // },

        // Apis
        {
          path: 'apis',
          element: <Apis />,
        },
        {
          path: 'apis/docs/:apiName',
          element: <ApiDocs />,
        },
        {
          path: 'file-itr',
          element: <FileItr />,
        },

        //Downloads
        {
          path: '/Downloads',
          element: <DownloadIndex />,
        },
        {
          path: '/downloadlist/gold&silverrate',
          element: <Goldsilverrate />,
        },
        {
          path: '/downloadlist/bussinesscodecforitrforms',
          element: <BussinessCodecForITRForms />,
        },
        {
          path: '/downloadlist/newcostinflationindex',
          element: <Newcostinflationindex />,
        },
        {
          path: '/downloadlist/costinflationindex',
          element: <Costinflationindex />,
        },
        {
          path: '/downloadlist/form16',
          element: <Form16 />,
        },
        {
          path: '/downloadlist/statuswiseincometaxcodeandpancode',
          element: <Statuswiseincometaxcodepan />,
        },
        {
          path: '/downloadlist/depreciationtable',
          element: <Depreciationtable />,
        },
        {
          path: '/downloadlist/interestaccruedonindiravikaspatras(ivp)',
          element: <InterestaccruedonIndira />,
        },
        {
          path: '/downloadlist/interestaccruedonnationalsavingcertificates(viiithissue)',
          element: <InterestaccruedonnationalVIIIth />,
        },
        {
          path: '/downloadlist/interestaccruedonnationalsavingcertificates(ixthissue)',
          element: <Interestaccruedonnationalxith />,
        },
        {
          path: '/downloadlist/interestonkvp',
          element: <Wordkvp />,
        },
        {
          path: '/downloadlist/countrycode',
          element: <Countrycode />,
        },
        // ITR Filling
        // {
        //     path: 'file-itr',
        //     element: <FileItr />,
        // },
        {
          path: '/',
          element: <ITRLayout />,
          children: [
            {
              path: 'itr-filling/upload-form-16',
              element: <UploadForm16 />,
            },
            {
              path: 'itr-filling/personal-info',
              element: <ITRPresonalInfo />,
            },
            {
              path: 'itr-filling/income-sources',
              element: <ITRIncomeSources />,
            },
            {
              path: 'itr-filling/deductions',
              element: <ITRDeductions />,
            },
            {
              path: 'itr-filling/tax-payable',
              element: <ITRTaxPayAble />,
            },
            {
              path: 'itr-filling/taxes-paid',
              element: <ITRTaxesPaid />,
            },
            {
              path: 'itr-filling/taxes-filling',
              element: <ITRTaxesFilling />,
            },
            {
              path: 'itr-filling/form-16',
              element: <ITRForm16 />,
            },
          ],
        },
        {
          path: '/',
          element: <DmateLayout />,
          children: [
            {
              path: 'EasyInvest/demataccount/overview',
              element: <Dmate />,
            },
            {
              path: 'EasyInvest/demataccount/star-health',
              element: <StarHealth />,
            },
            {
              path: 'EasyInvest/demataccount/lic',
              element: <LIC />,
            },
            {
              path: 'EasyInvest/demataccount/capital-gain-bond',
              element: <CapitalGainBond />,
            },
            {
              path: 'EasyInvest/demataccount/fixed-plans',
              element: <FixedPlans />,
            },
            {
              path: 'EasyInvest/demataccount/bajaj-capital',
              element: <BajajCapital />,
            },
          ],
        },
        // Loan Modules
        {
          path: '/loan',
          element: <PrivateRoutes Components={LoanDashboardLayout} />,
        },
        {
          path: '/loan/applyBikeLoan',
          element: <PrivateRoutes Components={ApplyBikeLoan} />,
        },
        {
          path: '/loan/applyCarLoan',
          element: <PrivateRoutes Components={ApplyCarLoan} />,
        },
        {
          path: '/loan/applyBusinessLoan',
          element: <PrivateRoutes Components={ApplyBusinessLoan} />,
        },
        {
          path: '/loan/applyEducationLoan',
          element: <PrivateRoutes Components={ApplyEducationLoan} />,
        },
        {
          path: '/loan/applyHomeLoan',
          element: <PrivateRoutes Components={ApplyHomeLoan} />,
        },
        {
          path: '/loan/applyPersonalloan',
          element: <PrivateRoutes Components={ApplyPersonalLoan} />,
        },
        {
          path: '/loan/apply-bank-details',
          element: <PrivateRoutes Components={LoanBankDetails} />,
        },
        {
          path: '/loan/bikeLoanDocuments_upload',
          element: <PrivateRoutes Components={bikeLoanDocuments} />,
        },
        {
          path: '/loan/carLoanDocuments_upload',
          element: <PrivateRoutes Components={carLoanDosuments} />,
        },
        {
          path: '/loan/buisnessLoanDocuments_upload',
          element: <PrivateRoutes Components={buisnessLoanDocuments} />,
        },
        {
          path: '/loan/educationLoanDocuments_upload',
          element: <PrivateRoutes Components={educationLoanDocuments} />,
        },
        {
          path: '/loan/homeLoanDocuments_upload',
          element: <PrivateRoutes Components={homeLoanDocuments} />,
        },
        {
          path: '/loan/personalLoanDocuments_upload',
          element: <PrivateRoutes Components={personalLoanDocuments} />,
        },
        // Insurance module
        {
          path: '/insurance',
          element: <PrivateRoutes Components={Insurance} />,
        },
        {
          path: '/bike_insurance_form',
          element: <PrivateRoutes Components={bikeInsuranceForm} />,
        },
        {
          path: '/car_insurance_form',
          element: <PrivateRoutes Components={carInsuranceForm} />,
        },
        {
          path: '/health_insurance_form',
          element: <PrivateRoutes Components={healthInsuranceForm} />,
        },
        {
          path: '/health_insurance_form',
          element: <PrivateRoutes Components={healthInsuranceForm} />,
        },
        {
          path: '/select_insurance_provider',
          element: <PrivateRoutes Components={selectInsuranceProvider} />,
        },
        {
          path: '/select_bike_insurance_plan',
          element: <PrivateRoutes Components={BikeInsurancePlan} />,
        },
        {
          path: '/select_car_insurance_plan',
          element: <PrivateRoutes Components={CarInsurancePlan} />,
        },
        {
          path: '/select_health_insurance_plan',
          element: <PrivateRoutes Components={HealthInsurancePlan} />,
        },
        // Blogs
        {
          path: 'blogs',
          element: <Blogs />,
        },
        {
          path: 'blog/:id',
          element: <BlogIndividualPage />,
        },
        {
          path: 'uploadFiles',
          element: <PrivateRoutes Components={UploadFiles} />,
        },
        // Cart and Payments
        {
          path: 'cart',
          element: <PrivateRoutes Components={Cart} />,
        },
        {
          path: 'checkout',
          element: <PrivateRoutes Components={Checkout} />,
        },
        {
          path: 'payment-success',
          element: <PrivateRoutes Components={PaymentSuccess} />,
        },
        {
          path: 'payment-failure',
          element: <PrivateRoutes Components={PaymentFailure} />,
        },

        // Dashboard
        // {
        //     path: "/",
        //     element: <DashboardLayout />,
        //     children:[
        //             // gstr
        //             {
        //                 path: "dashboard/gstr",
        //                 element: <GSTR />,
        //             },
        //                 {
        //                     path: "dashboard/gstr/crs",
        //                     element: <CheckReturnStatus/>,
        //                 },
        //                 {
        //                     path: "dashboard/gstr/pi",
        //                     element: <PermanentInformation/>,
        //                 },
        //                 {
        //                     path: "dashboard/gstr/login",
        //                     element: <LoginWithGSTIN/>,
        //                 },

        //             {
        //                 path: "dashboard/my-account/services",
        //                 element: <Services/>,
        //             },

        //             {
        //                 path: "dashboard/settings",
        //                 element: <Settings/>,
        //             },

        //             {
        //                 path: "dashboard/reports/project-report",
        //                 element: <ProjectReport />,
        //             },

        //             // invoice
        //             {
        //                 path: "dashboard/invoice",
        //                 element: <Invoice />,
        //             },
        //                 {
        //                     path: "dashboard/invoice/totalbalance",
        //                     element: <TotalBalance/>,
        //                 },
        //                 {
        //                     path: "dashboard/invoice/generator",
        //                     element: <InvoiceGenerator/>,
        //                 },

        //     ]
        // },
      ],
    },
    {
      // New Dashboard
      path: '/dashboard',
      element: <Dashboard_Layout />,

      children: [
        {
          index: true,
          element: (
            <PrivateAccessRoute
              SuperAdmin_Component={<Dashboard />}
              Admin_Component={<Dashboard />}
              Normal_Component={<Users_Dashboard />}
            />
          ),
        },
        // my account
        {
          path: 'my-account/services',
          element: (
            <PrivateAccessRoute
              Normal_Component={<Services />}
              Admin_Component={<Services />}
              SuperAdmin_Component={'<Services/>'}
            />
          ),
        },
        {
          path: 'my-account/orders',
          element: (
            <PrivateAccessRoute
              Normal_Component={<Orders />}
              Admin_Component={<Orders />}
              SuperAdmin_Component={'<Orders/>'}
            />
          ),
        },
        {
          path: 'my-account/payments',
          element: (
            <PrivateAccessRoute
              Normal_Component={<Payments />}
              Admin_Component={<Payments />}
              SuperAdmin_Component={'<Payments/>'}
            />
          ),
        },
        {
          path: 'my-account/apis',
          element: '<PrivateAccessRoute Normal_Component={<APIs/>}/>',
        },
        // GSTReturn
        {
          path: 'gstr',
          element: <PrivateRoutes Components={GSTR} />,
        },
        {
          path: 'gstr/crs',
          element: <PrivateRoutes Components={CheckReturnStatus} />,
        },
        {
          path: 'gstr/pi',
          element: <PrivateRoutes Components={PermanentInformation} />,
        },
        {
          path: 'gstr/login',
          element: <PrivateRoutes Components={LoginWithGSTIN} />,
        },
        {
          path: '/dashboard/gstr/gstr1',
          element: <PrivateRoutes Components={GSTR_1} />,
        },
        {
          path: '/dashboard/gstr/outwardsupplies',
          element: <PrivateRoutes Components={OutwardSupplies} />,
        },
        {
          path: '/dashboard/gstr/inwardsupplies',
          element: <PrivateRoutes Components={InwardSupplies} />,
        },
        // Invoice
        {
          path: '/dashboard/invoice',
          element: (
            <PrivateAccessRoute
              Normal_Component={<User_Invoice_Account_Balance />}
              Admin_Component={<Invoice_Dashboard />}
              SuperAdmin_Component={<Invoice_Dashboard />}
            />
          ),
        },
        {
          path: '/dashboard/invoicetransaction',
          element: <PrivateRoutes Components={User_Invoice_Transactions} />,
        },
        {
          path: '/dashboard/invoicetransaction/receiptwidget',
          element: (
            <PrivateRoutes Components={Invoice_Transaction_Recipt_widget} />
          ),
        },
        {
          path: '/dashboard/invoicetransaction/paymentwidget',
          element: (
            <PrivateRoutes Components={Invoice_Transaction_Payment_widget} />
          ),
        },
        {
          path: '/dashboard/invoicetransaction/cashwidget',
          element: (
            <PrivateRoutes Components={Invoice_Transaction_Cash_widget} />
          ),
        },
        {
          path: '/dashboard/invoicetransaction/bankwidget',
          element: (
            <PrivateRoutes Components={Invoice_Transaction_Bank_widget} />
          ),
        },

        {
          path: '/dashboard/invoice/party',
          element: <PrivateRoutes Components={Parties_Index} />,
        },
        {
          path: '/dashboard/invoice/party/addparty',
          element: <PrivateRoutes Components={Add_Parties} />,
        },
        {
          path: '/dashboard/invoice/item/additems',
          element: <PrivateRoutes Components={Add_Items} />,
        },
        {
          path: '/dashboard/invoice/item',
          element: <PrivateRoutes Components={Items_Index} />,
        },
        {
          path: '/dashboard/invoice/purchase/createpurchase',
          element: <PrivateRoutes Components={Create_Purchase} />,
        },
        {
          path: '/dashboard/invoice/purchase',
          element: <PrivateRoutes Components={Purchase_Index} />,
        },
        {
          path: '/dashboard/invoice/sales/createsale',
          element: <PrivateRoutes Components={Create_Sales} />,
        },
        {
          path: '/dashboard/invoice/sales',
          element: <PrivateRoutes Components={Sales_Index} />,
        },

        //finance
        {
          path: '/dashboard/finance/loan',
          element: <PrivateRoutes Components={Loan_Index} />,
        },
        {
          path: '/dashboard/finance/loan/apply',
          element: <PrivateRoutes Components={Apply_Loan} />,
        },
        {
          path: '/dashboard/finance/loan/create_loan',
          element: <PrivateRoutes Components={Create_Loan} />,
        },
        {
          path: '/dashboard/finance/payment',
          element: <PrivateRoutes Components={Payment_index} />,
        },
        {
          path: '/dashboard/finance/payment/view',
          element: <PrivateRoutes Components={View_Payment} />,
        },
        //report
        {
          path: '/dashboard/reports/project_report',
          element: <PrivateRoutes Components={Project_Report} />,
        },

        // profile
        {
          path: 'user-profile',
          element: <PrivateRoutes Components={UserProfile} />,
        },
        {
          path: 'business-profile',
          element: <PrivateRoutes Components={BusinessProfile} />,
        },
        // EasyInvestment
        {
          path: 'easy-investment',
          element: '',
          children: [
            {
              path: 'insurance',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<InsuranceTypes_superAdmin />}
                  Admin_Component={<SelectInsuranceType />}
                />
              ),
            },
            {
              path: 'insurance/:insuranceType',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<InsuranceTypes_superAdmin />}
                  Admin_Component={<SelectInsurance />}
                />
              ),
            },
            {
              //lic
              path: 'insurance/:insuranceType/lic',
              element: (
                <PrivateAccessRoute Admin_Component={<CreateInsurance />} />
              ),
            },
            {
              path: 'insurance/:insuranceType/lic/create-health-insurance',
              element: <PrivateAccessRoute Admin_Component={<HealthSteps />} />,
            },
            {
              path: 'insurance/:insuranceType/lic/create-health-insurance/plans',
              element: <PrivateAccessRoute Admin_Component={<Plans />} />,
            },

            {
              //bajaj
              path: 'insurance/:insuranceType/bajaj',
              element: (
                <PrivateAccessRoute
                  Admin_Component={<BajajCapital_dashboard />}
                />
              ),
            },
            {
              //idfc-first-bank
              path: 'insurance/:insuranceType/idfc-first-bank',
              element: (
                <PrivateAccessRoute Admin_Component={'/idfc-first-bank'} />
              ),
            },
            {
              //star-health
              path: 'insurance/:insuranceType/star-health',
              element: <PrivateAccessRoute Admin_Component={'/star-health'} />,
            },
          ],
        },
        // >sub
        {
          path: 'easy-investment/life-insurance',
          element: (
            <PrivateAccessRoute
              Admin_Component={<LifeInsurance_superAdmin />}
              SuperAdmin_Component={<LifeInsurance_superAdmin />}
            />
          ),
        },
        //sub > sub
        {
          path: 'easy-investment/life-insurance/lic-dashboard',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<LIC_Dashboard />}
                  Admin_Component={<LIC_Dashboard />}
                />
              ),
            },
            {
              path: 'product',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Product_LIC />}
                  Admin_Component={<Product_LIC />}
                />
              ),
            },
            {
              path: 'create-agent',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<CreateAgent_LIC />}
                  Admin_Component={<CreateAgent_LIC />}
                />
              ),
            },
            {
              path: 'customer',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Customer_LIC />}
                  Admin_Component={<Customer_LIC />}
                />
              ),
            },
            {
              path: 'application',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Application_LIC />}
                  Admin_Component={<Application_LIC />}
                />
              ),
            },
            {
              path: 'premium-payment',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<PremiumPayment_LIC />}
                  Admin_Component={<PremiumPayment_LIC />}
                />
              ),
            },
            {
              path: 'claims',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Claims_LIC />}
                  Admin_Component={<Claims_LIC />}
                />
              ),
            },
            {
              path: 'performance',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Performance_LIC />}
                  Admin_Component={<Performance_LIC />}
                />
              ),
            },
          ],
        },
        {
          path: 'easy-investment/general-insurance/',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  Admin_Component={<GeneralInsurance_superAdmin />}
                  SuperAdmin_Component={<GeneralInsurance_superAdmin />}
                />
              ),
            },
            {
              path: 'bajaj-capital-dashboard',
              element: (
                <PrivateAccessRoute
                  Admin_Component={<BajajCapital_dashboard />}
                />
              ),
            },
            // >sub
            {
              path: 'bajaj-capital-dashboard/sale',
              element: (
                <PrivateAccessRoute Admin_Component={<SaleInsurance />} />
              ),
            },
            // >sub>sub
            {
              path: 'bajaj-capital-dashboard/sale/:insurance_name',
              element: <PrivateAccessRoute Admin_Component={<SalesForm />} />,
            },
            {
              path: 'bajaj-capital-dashboard/sale/:insurance_name',
              element: <PrivateAccessRoute Admin_Component={<SalesForm />} />,
            },
            {
              path: 'bajaj-capital-dashboard/sale/:insurance_name',
              element: <PrivateAccessRoute Admin_Component={<SalesForm />} />,
            },
          ],
        },

        /*Accounts*/
        {
          path: '/dashboard/accounts',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Accounts />}
                  Admin_Component={<Accounts />}
                />
              ),
            },
            {
              path: 'items',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Items />}
                  Admin_Component={<Items />}
                />
              ),
            },
            {
              path: 'items',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Items />}
                  Admin_Component={<Items />}
                />
              ),
            },
            {
              path: 'all-parties',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<AllParties />}
                  Admin_Component={<AllParties />}
                />
              ),
            },
            {
              path: 'reports',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Reports />}
                  Admin_Component={<Reports />}
                />
              ),
            },
            {
              path: 'sales',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Sales />}
                  Admin_Component={<Sales />}
                />
              ),
            },
            {
              path: 'purchase',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Purchase />}
                  Admin_Component={<Purchase />}
                />
              ),
            },
            {
              path: 'expense',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Expense />}
                  Admin_Component={<Expense />}
                />
              ),
            },
            {
              path: 'cash-bank',
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Cash_Bank />}
                  Admin_Component={<Cash_Bank />}
                />
              ),
            },
          ],
        },
        // {
        //   path:"invoice",
        //   element:"",
        //   children:[
        //     {
        //       index:true,
        //       element: <PrivateAccessRoute SuperAdmin_Component={<Invoice_Dashboard/>} />,
        //     }
        //   ]
        // },
        {
          path: 'finance',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Finance_Dashboard />}
                  Admin_Component={<Finance_Dashboard />}
                />
              ),
            },
          ],
        },
        {
          path: 'transactions',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Transaction_Dashboard />}
                  Admin_Component={<Transaction_Dashboard />}
                />
              ),
            },
          ],
        },
        {
          path: 'reports',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Reports_Dashboard />}
                  Admin_Component={<Reports_Dashboard />}
                />
              ),
            },
          ],
        },
        {
          path: 'bill-payments',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<BillPayment_Dashboard />}
                  Admin_Component={<BillPayment_Dashboard />}
                />
              ),
            },
          ],
        },
        {
          path: 'web-settings',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<WebSettings_Dashboard />}
                />
              ),
            },
            {
              path: 'edit-home',
              element: (
                <PrivateAccessRoute SuperAdmin_Component={<Edit_HomePage />} />
              ),
            },
            {
              path: 'edit-blogs',
              element: (
                <PrivateAccessRoute SuperAdmin_Component={<Edit_Blogs />} />
              ),
            },
            {
              path: 'edit-services',
              element: (
                <PrivateAccessRoute SuperAdmin_Component={<Edit_services />} />
              ),
            },
            {
              path: 'edit-e-library',
              element: (
                <PrivateAccessRoute SuperAdmin_Component={<Edit_ELibrary />} />
              ),
            },
            {
              path: 'edit-careers',
              element: (
                <PrivateAccessRoute SuperAdmin_Component={<Edit_Career />} />
              ),
            },

            {
              path: 'edit-footer',
              element: (
                <PrivateAccessRoute SuperAdmin_Component={<Edit_Footer />} />
              ),
            },
          ],
        },
        {
          path: 'settings',
          element: '',
          children: [
            {
              index: true,
              element: (
                <PrivateAccessRoute
                  SuperAdmin_Component={<Settings_Dashboard />}
                />
              ),
            },
          ],
        },

        {
          path: '/dashboard/:subPath/all-users',
          element: <PrivateAccessRoute SuperAdmin_Component={<AllUsers />} />,
        },
        {
          path: '/dashboard/:subPath/active-users',
          element: (
            <PrivateAccessRoute SuperAdmin_Component={<ActiveUsers />} />
          ),
        },
        {
          path: '/dashboard/:subPath/non-active-users',
          element: (
            <PrivateAccessRoute SuperAdmin_Component={<Non_ActiveUsers />} />
          ),
        },
      ],
    },
    {
      path: '/pdfViewer-report',
      element: <PdfViewer_projectReport />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/verification',
      element: <Verification />,
    },

    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/pdfViewer',
      element: <PrivateRoutes Components={PdfViewer} />,
    },
    {
      path: '/pdfViewer1',
      element: <PrivateRoutes Components={PdfViewer1} />,
    },
    {
      path: '/lib-pdfViewer',
      element: <PrivateRoutes Components={LibPdfViewer} />,
    },
    {
      path: '/imagePdf',
      element: <PrivateRoutes Components={ImagePDF} />,
    },

    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}
