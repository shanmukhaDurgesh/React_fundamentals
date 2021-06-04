import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Form from './components/Form';
import ValidationForm from './components/ValidationForm';
import Third from './components/Third';
import OldFormik from './formik/OlfFormik';
import NewFormik from './formik/NewFormik';
import FormikContainer from './reusableFormikComponents/FormikContainer';
import { BasicTable } from './reactTable/BasicTable';
import { NewTable } from './reactTable/NewTable';
import { FilterTable } from './reactTable/FilterTable';
import Fundamental from './components/Fundamental';
import Hoc1 from './components/Hoc1';
import Hoc2 from './components/Hoc2';
import BasicModal from './components/BasicModal';
import UseStateHookOne from './reactHooks/UseStateHookOne';
import UseStateHookTwo from './reactHooks/UseStateHookTwo';
import UseStateHookThird from './reactHooks/UseStateHookThird';
import UseReducerHookOne from './reactHooks/UseReducerHookOne';
import IntakeHome from './Intake/IntakeHome';
import { KdTable } from './KD-Table/KdTable';


function App() {
  return (
    <div className="App">
      {/* <First name="gvh"/> */}
      {/* <Second name="gvh"/> */}
      {/* <Form /> */}
      {/* <ValidationForm /> */}
      {/* <Third /> */}
      {/* <OldFormik /> */}
      {/* <NewFormik /> */}
      {/* <FormikContainer /> */}
      {/* <BasicTable /> */}
      {/* <NewTable /> */}
      {/* <FilterTable /> */}
      {/* <Fundamental /> */}
      {/* <Hoc1 />
      <Hoc2 />
      <BasicModal /> */}
      {/* <UseStateHookOne />
      <UseStateHookTwo />
      <UseStateHookThird />
      <UseReducerHookOne /> */}
      {/* <IntakeHome /> */}
      <KdTable />
    </div>
  );
}

export default App;
