import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Headers from './components/headers';
import Add from './components/add';
import EntryBody from './components/entry_body';

// class App extends Component {
//
//     componentWillMount(){
//         console.log('app will mounted');
//     }
//     componentDidMount(){
//         console.log('app did mount');
//     }
//     componentWillReceiveProps(){
//         console.log('app did receive');
//         // this.props.retrieveAll();
//     }
//
//     render() {
//         console.log('app render');
//         return (
//             <div className="container-fluid">
//                 <div className="row">
//                     <Add />
//                     <EntryBody />
//                 </div>
//             </div>
//         );
//     }
// }
// function mapStateToProps(state){
//     return{
//         appState: state.entries,
//     }
// }
// export default connect(mapStateToProps,{retrieveAll})(App);

const App = () => (
    <Grid>
        <Row>
            <Headers/>
            <Add/>
            <EntryBody/>
        </Row>
    </Grid>
);
export default App;