

### Getting Started with AVAIL Data Management System (DMS)

DMS is a data management system that allows you to create and modify you own data configurations in the client with a backend provided through simple configuration.

To create a page, you simple need to create a JSON configuration and register it as a route.




#### Page Config

```
export default {
  path: "/avl",
  exact: false,
  auth: false,
  mainNav: true,
  name: 'Home',
  component: () => <div>A page</div>,
  layout: 'Simple',
  layoutSettings: {
    fixed: true,
    nav: 'top',
    headerBar: true,
    theme: 'light'
  }
}
```


