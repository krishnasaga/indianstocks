import './App.css';
import {
  Admin,
  ArrayInput,
  Create,
  Datagrid,
  Edit,
  Link,
  List,
  Resource,
  SimpleForm,
  SimpleFormIterator,
  TextField,
  TextInput
} from 'react-admin';
import {restClient} from 'ra-data-feathers';
import fetch from 'isomorphic-fetch';

const rest = require('@feathersjs/rest-client');
const feathers = require('@feathersjs/feathers');

const feathersClient = rest('http://localhost:3030')

// Configure an AJAX library (see below) with that client
const app = feathers();
app.configure(feathersClient.fetch(fetch));


function App() {
  return (
    <Admin className="App" dataProvider={restClient(app, {
      id: '_id', // If your database uses an id field other than 'id'. Optional.
    })}>
      <Resource name={'sector'} list={SectorsList} create={SectorsCreate} edit={SectorsEdit}/>
    </Admin>
  );
}


function SectorsList(props) {
  return <List {...props}>
    <Datagrid>
      <TextField source="_id"/>
      <Link to={`/${props.id}`}><TextField source="name"/></Link>
      <TextField source="displayName"/>
      <TextField source="intro"/>
    </Datagrid>
  </List>;
}

export const SectorsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name"/>
      <TextInput source="displayName"/>
      <TextInput source="intro"/>
      <TextInput source="backgroundImage"/>
      <ArrayInput source="insights">
        <SimpleFormIterator>
          <TextInput source="name"/>
          <TextInput source="number"/>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);


export const SectorsEdit = (props) => (
  <Edit  {...props}>
    <SimpleForm>
      <TextInput source="name"/>
      <TextInput source="displayName"/>
      <TextInput source="intro"/>
      <TextInput source="backgroundImage"/>
      <ArrayInput source="insights">
        <SimpleFormIterator>
          <TextInput source="name"/>
          <TextInput source="number"/>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default App;
