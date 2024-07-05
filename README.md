# Mazer React Components

> **Note**: This is a minor alpha release (0.1.0-alpha). This version is still in development and may contain bugs or incomplete features.

This library is a wrapper for the open source bootstrap 5 theme [Mazer](https://github.com/zuramai/mazer) by [Saugi](https://github.com/zuramai). It provides a set of React components to help build consistent layouts and sidebars for your applications. It ensures that the end-implementing app doesn't have to worry about layout or design, providing a structured way to define sidebar items and layouts.

## Attribution

 - [Mazer](https://github.com/zuramai/mazer) by [Saugi](https://github.com/zuramai)
 - [Bootstrap](https://github.com/twbs/bootstrap) by [twbs](https://github.com/twbs/bootstrap)

## Features

- **Layout Setup**: Use different layouts like `DefaultLayout`, `SingleColumnLayout`, and `VerticalNavbarLayout`.
- **Context Management**: Easily manage theme configurations (such as sidebar items and theme tone preference) with React Context.

## Installation

To install the library, use npm or yarn:

```bash
npm install mazer-react-components
```

## Usage 
### Initialization
Wrap your app/page/etc component with the MazerContextProvider. Then wrap subsequent components with a layout. Sidebar items can be set globally while declaring the MazerContextProvider, or can be set on individual layouts. 

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
  ];

export const AppSidebar = [
  {title:"Main"},
  {href: "/dashboard",
    text: "Dashboard"
  },
  {href: "/calculator",
    text: "Calculator"
  },
  {href: "/",
    text: "Home"
  },
  {
    text:"Sub Menu",
    children:[
      {text:"Child 1",
        href:"#"
      },
      {text:"Child 2",
        href:"#"
      },
      {text:"Child 3",
       children:[ 
          {text:"Child 4",
            href:"#"
          },
          {text:"Child 5",
            href:"#"
          },
          {text:"Child 6",
            href:"#"
          },
        ]
      },
      {text:"Child 7",
       children:[ 
          {text:"Child 8",
            href:"#"
          },
          {text:"Child 9",
            href:"#"
          },
          {text:"Child 10",
            href:"#"
          },
        ]
      },
    ]
  }
];

  return (
    <MazerContextProvider initialSidebarItems={AppSidebar}>
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
        },
        {
          <Dropdown key={300} isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
            <DropdownToggle key={200} caret>Dropdown</DropdownToggle>
            <DropdownMenu key={100}>
              <DropdownItem key={10} header>Header</DropdownItem>
              <DropdownItem key={20}>Some Action</DropdownItem>
              <DropdownItem key={30} text>Dropdown Item Text</DropdownItem>
              <DropdownItem key={40} disabled>Action (disabled)</DropdownItem>
              <DropdownItem key={50} divider />
              <DropdownItem key={60}>Foo Action</DropdownItem>
              <DropdownItem key={70}>Bar Action</DropdownItem>
              <DropdownItem key={80}>Quo Action</DropdownItem>
            </DropdownMenu>
      </Dropdown>
        }
        ]}
      >
      <h1>I'm a page that uses the VerticalLayout component!</h1>
      <h2>Navbar</h2>
      <p>The VerticalNavbarLayout's 'navbar' property takes a (mixed) array of React Nodes or 'MazerNavbarChildProps'. This allows for quick creation of drop down menus defined by the Mazer theme while allow for custom items at the implementer's descretion. 
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