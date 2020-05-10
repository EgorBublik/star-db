import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {PersonDetails, PersonList} from '../sw-components';
import Row from '../row';

const PeoplePage = ({history, match}) => {

    const [itemDelete, setItemDelete] = useState(null);
    const {id} = match.params;
    const [currentId, setCurrentId] = useState(id)

    useEffect(() => {
        setCurrentId(id)
    }, [id])
    useEffect(() => {
        console.log(match.params)
    }, [currentId])


    return (
        <Row
            left={<PersonList itemDelete={itemDelete} setCurrentId={setCurrentId}
                              onItemSelected={(id) => history.push(id)}/>}
            right={<PersonDetails itemId={currentId} setItemDelete={setItemDelete}/>}/>
    );
};

export default withRouter(PeoplePage);
