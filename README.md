# Mazer React Components

> **Note**: This is a minor alpha release (0.0.6-alpha.6). This version is still in development and may contain bugs or incomplete features.

This library is a wrapper for the open source bootstrap 5 theme [Mazer](https://github.com/zuramai/mazer) by [Saugi](https://github.com/zuramai). It provides a set of React components to help build consistent layouts and sidebars for your applications. It ensures that the end-implementing app doesn't have to worry about layout or design, providing a structured way to define sidebar items and layouts.

## Attribution

 - [Mazer](https://github.com/zuramai/mazer) by [Saugi](https://github.com/zuramai)
 - [Bootstrap](https://github.com/twbs/bootstrap) by [twbs](https://github.com/twbs/bootstrap)

## Features

- **Layout Setup**: Use different layouts like `DefaultLayout`, `SingleColumnLayout`, and `VerticalNavbarLayout`.
- **Sidebar**: Define sidebars with nested sidebar items.
- **Context Management**: Easily manage theme configurations with React Context.

## Installation

To install the library, use npm or yarn:

```bash
npm install mazer-react-components
```

## Usage 
### Initialization
Wrap your app/page/etc component with the MazerContextProvider. Then wrap subsequent components with a layout. 

#### Example usage

##### App.tsx
```tsx
import React from "react";
import Calculator from "./routes/Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Dashboard } from "./routes/Dashboard";
import { MazerContextProvider } from "mazer-react-components";

const App: React.FC = () => {

  const routes = [
    {
      path:'/',
      exact: true,
      component: Home,
    },
    {
      path:'/dashboard',
      exact: true,
      component: Dashboard
    },
    {
      path:'/calculator',
      exact: true,
      component: Calculator
    },
  ]

  return (

    <MazerContextProvider>
      <BrowserRouter>
        <Routes>
          {
            routes.map(({path, exact, component: Component})=>(
              <Route
                key={path}
                path={path}
                element={ 
                  <Component />
                } />
            ))
          }
          </Routes>
      </BrowserRouter>
      </MazerContextProvider>
  );
};

export default App;
```
##### Home.tsx
```tsx
import React from "react";
import { AppSidebar } from "../Sidebar";
import { DefaultLayout } from "mazer-react-components";

export const Home: React.FC = () => {
  return (
    <DefaultLayout sidebarItems={AppSidebar}>
      <h1>Hi from the home page</h1>
    </DefaultLayout>
  );
};
```

##### Dashboard.tsx
```tsx
import React from "react";
import { AppSidebar } from "../Sidebar";
import { VerticalNavBarLayout } from "mazer-react-components";

export const Dashboard: React.FC = () => {
 
  return (
    <VerticalNavBarLayout 
      sidebarItems={AppSidebar} 
      navbar={[
        {
          icon:"envelope",
          badgeText:"8",
          badgeStyle:'primary',
          children:[
            {text:"Link 1", href:"#"},
            {text:"Link 2", href:"#"},
            {text:"Link 3", icon:'envelope', iconStyle:'warning', subText:"The 3rd Link", href:"#"}
          ]
        },
        {
          icon:"cart",
          children:[
            {text:"Link 1", href:"#"},
            {text:"Link 2", href:"#"},
            {text:"Link 3", icon:'house', iconStyle:'success', subText:"The 3rd Link", href:"#"}
          ]
        }
        ]}
      >
      <h1>Hi, I'm the Dashboard Page</h1>
    </VerticalNavBarLayout>
    
  );
};

```

##### Calculator.tsx
```tsx
import { SingleColumnLayout } from "mazer-react-components";
import React from "react";

const Calculator: React.FC = () => {
 
  return (
    <SingleColumnLayout
    backButtonLink="/">
    <h1>Hi, I'm the Calculator Page</h1>
    <p>I don't actually calculate anything</p>
    </SingleColumnLayout>
  );
};

export default Calculator;

```

By using these components and configurations, you can easily set up and manage different layouts and sidebars in your application.