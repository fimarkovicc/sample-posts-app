import React from 'react'

type WithNameProps = {
  name: string
}

const withName = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const componentName = WrappedComponent.name || WrappedComponent.displayName || 'noname'

  class WithName extends React.Component<P & WithNameProps> {
    
    render() {
      return <WrappedComponent name={componentName} {...this.props as P} />
    }
  }

  return WithName
}

export default withName