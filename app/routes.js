// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'mainPage',
      getComponent(nextState, cb){
        const importModules = Promise.all([
        import('containers/MainPage/reducer'),
        import('containers/MainPage/sagas'),
        import('containers/MainPage'),
      ]);
        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('mainPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      indexRoute: {
        getComponent: (partialNextState, cb) =>{
          const importModules = Promise.all([
          import('containers/DashBoardPage/reducer'),
          import('containers/DashBoardPage/sagas'),
          import('containers/DashBoardPage'),
          ]);

          const renderRoute = loadModule(cb);
          importModules.then(([reducer, sagas, component]) => {
            injectReducer('dashBoardPage', reducer.default);
            injectSagas(sagas.default)
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        }
      },
      childRoutes:[{
          path:'/orders',
          name: 'orders',
          getComponent:(nextState, cb)=>{
            const importModules = Promise.all([
            import('containers/OrdersPage/reducer'),
            import('containers/OrdersPage/sagas'),
            import('containers/OrdersPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('ordersPage', reducer.default);
              injectSagas(sagas.default)
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          }
      }]
    },
     {
      path: '/auth/login',
      name: 'loginPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LoginPage/reducer'),
          import('containers/LoginPage/sagas'),
          import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('loginPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
       {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
