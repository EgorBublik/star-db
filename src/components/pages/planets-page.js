import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import {PlanetDetails, PlanetList} from '../sw-components';
import Row from '../row';

const PlanetsPage = ({history, match}) => {

    const [itemDelete, setItemDelete] = useState(null);
    const {id} = match.params;
    const [currentId, setCurrentId] = useState(id)

    useEffect(() => {
        setCurrentId(id)
    }, [id])
    useEffect(() => {
        console.log('fsd', match.params)
    }, [currentId])


// export default class PlanetsPage extends Component {
//
//
//   state = {
//     selectedItem: null
//   };
//
//   onItemSelected = (selectedItem) => {
//     this.setState({ selectedItem });
//   };
//
//   render() {
//     const { selectedItem } = this.state;

    return (
        <Row
            left={<PlanetList itemDelete={itemDelete} setCurrentId={setCurrentId}
                              onItemSelected={(id) => history.push(id)}/>}
            right={<PlanetDetails itemId={currentId} setItemDelete={setItemDelete}/>}/>
    );
}

export default withRouter(PlanetsPage);
