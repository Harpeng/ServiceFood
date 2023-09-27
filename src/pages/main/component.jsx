import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from "../../constants/constants";
import { Tabs } from '../../components/tabs/component';
import { TabContent } from '../../components/tabs/tabContent/component';

export const Main = () => {
    const [current, setCurrent] = React.useState(restaurants[0].name);


    return (
        <div>
        <div style={{display: 'flex'}}>
            {
                restaurants.map(({name, id}) => <Tabs value={name} key={id}  onClick={() => setCurrent(name)}></Tabs>
                )
            }
        </div>
            {
                restaurants.filter(({name}) => name === current).map((data, id) => (
                    <TabContent key={id} data={data} ></TabContent>
                ))
            }
        </div>
    )
}

