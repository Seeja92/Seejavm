import React from 'react'

export default async function DynamicSearch(props:any) {
    console.log("dynamic search:",props);
    const {myparams } =await props.params;
    const category=myparams[0];
    const group=myparams[1];
    // const category=myparams[2];
  return (
    <div>
      DynamicSearchProducts: {category}
    </div>
  )
}
