"use client"

import {Context, createContext, useState} from "react";
import {Props} from "@/app/types";

type tab = 'rec' | 'fol';

export const TabContext = createContext({
  tab: 'rec',
  setTab: (value: tab) => {
  }
})
export default function TabProvider({children}: Props) {
  const [tab, setTab] = useState('rec');
  console.log('tabPrivider', children);
  return (
    <TabContext.Provider value={{tab, setTab}}>
      {children}
    </TabContext.Provider>
  )
}