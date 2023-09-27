import React from "react";
import { restaurants } from "../../constants/constants";
import { Tabs } from "../../components/tabs/tabs";
import { TabsContent } from "../../components/tabsContent/component";

export const Main = () => {
    const [current, setCurrent] = React.useState(restaurants[0].name)

  return (
    <section>
      <ul style={{display: 'flex'}}>
        {restaurants.map(({name, id}) => (
        <Tabs value={name} key={id} onClick={() => setCurrent(name)}></Tabs>
      ))}
      </ul>
        {
            restaurants.filter(({name}) => current === name).map((data, id) => (
                <TabsContent data={data} key={id} />
            ))
        }
    </section>
  );
};
