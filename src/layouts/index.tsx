import Header from "@/components/Header";
import React from "react";

const Layout: React.FC = (props: any) => {
  console.log("1111111")
  return (
    <>
      <Header>header</Header>
      <div>
        {props.children}
      </div>
    </>

  )
}

export default Layout;