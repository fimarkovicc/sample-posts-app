import React from 'react'

export type WithNameType = {
  name: string
}

export default function withName<P>(WrappedComponent: React.ComponentType<P & WithNameType>) {  
  const componentName = WrappedComponent.name || WrappedComponent.displayName || 'noname'

  const WithNameComponent = (props: P) => {    
    return <WrappedComponent {...props} name={componentName} />
  }

  return WithNameComponent
}
