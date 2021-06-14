import React, { useEffect, useState } from "react";
import { EventsDataMap } from "utils/constants";
import { events } from "utils/eventsData";

interface AppContextInterface {
  eventsData: EventsDataMap;
}

/**
 * Context to manage app state
 */
const AppContext = React.createContext<AppContextInterface>({ eventsData: {} });

/**
 * Context Provider to wrap component with AppContext
 * giving access to context Data
 */
export const AppContextProvider = (props: React.PropsWithChildren<{}>) => {
  const [eventsData, setEventsData] = useState<EventsDataMap>({});

  // adds add to the db if not exist and set context state
  useEffect(() => {
    const eventsMap: EventsDataMap = {};

    // transforms the data to the format usable by our app
    events.forEach((event) => {
      const date = new Date(event.date);
      const key = date.toDateString();
      if (!eventsMap[key]) {
        eventsMap[key] = [];
      }
      eventsMap[key].push({ ...event, date: new Date(event.date) });
    });

    setEventsData(eventsMap);
  }, []);

  return (
    <AppContext.Provider value={{ eventsData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
