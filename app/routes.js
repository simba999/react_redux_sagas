// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import {getAsyncInjectors} from "utils/asyncInjectors";
// import {getVideoManagerAction} from "containers/VideoManagerPage/actions";
import {loadingAction, loadedAction} from "containers/ModalsContainer/actions";
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};
const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};
export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const {injectReducer, injectSagas} = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  return [
    {
      path: '/',
      name: 'indexPage',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/login')
      },
      getComponents(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/UploadsContainer/reducer'),
          System.import('containers/UploadsContainer/sagas'),
          System.import('containers/UploadsContainer'),
          System.import('containers/ModalsContainer/reducer'),
          System.import('containers/ModalsContainer/sagas'),
          System.import('containers/ModalsContainer'),
          System.import('containers/NotificationsContainer/reducer'),
          System.import('containers/NotificationsContainer/sagas'),
          System.import('containers/NotificationsContainer'),
          System.import('containers/PageContainer/reducer'),
          System.import('containers/PageContainer/sagas'),
          System.import('containers/PageContainer'),
        ]);
        importModules.then(([
          uploads_reducer, uploads_sagas, uploads_component,
          modals_reducer, modals_sagas, modals_component,
          notifications_reducer, notifications_sagas, notifications_component,
          page_reducer, page_sagas, page_component]) => {
          injectReducer('uploadsContainer', uploads_reducer.default);
          injectSagas(uploads_sagas.default);
          injectReducer('modalsContainer', modals_reducer.default);
          injectSagas(modals_sagas.default);
          injectReducer('notificationsContainer', notifications_reducer.default);
          injectSagas(notifications_sagas.default);
          injectReducer('pageContainer', page_reducer.default);
          injectSagas(page_sagas.default);
          cb(null, {
            uploads: uploads_component.default,
            modals: modals_component.default,
            notifications: notifications_component.default,
            page: page_component.default
          })
          // store.dispatch(loadedAction());
        });
        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
            path: '/login',
            name: 'loginPage',
            onEnter() {
              console.log('loading')
              // store.dispatch(loadingAction());
            },
            getComponent(nextState, cb) {
              const importModules = Promise.all([
                System.import('containers/LoginPage/reducer'),
                System.import('containers/LoginPage/sagas'),
                System.import('containers/LoginPage'),
              ]);
              const renderRoute = loadModule(cb);
              importModules.then(([reducer, sagas, component]) => {
                injectReducer('loginPage', reducer.default);
                injectSagas(sagas.default);
                renderRoute(component);
                // store.dispatch(loadedAction());
              });
              importModules.catch(errorLoading);
            },
        },
        {
          path: '/signup',
          name: 'signupPage',
          onEnter() {
            console.log("loading")
            // store.dispatch(loadingAction());
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/SignupPage/reducer'),
              System.import('containers/SignupPage/sagas'),
              System.import('containers/SignupPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('signupPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
              // store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
        },
        {
          path: '/signin',
          name: 'signinPage',
          onEnter() {
            // store.dispatch(loadingAction());
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/SigninPage/reducer'),
              System.import('containers/SigninPage/sagas'),
              System.import('containers/SigninPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('signinPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
              //store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
        },
        {
          path: '/dashboard',
          name: 'dashboardPage',
          onEnter() {
            console.log('loading')
            // store.dispatch(loadingAction());
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
            System.import('containers/DashboardPage/reducer'),
            System.import('containers/DashboardPage/sagas'),
            System.import('containers/DashboardPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
            injectReducer('dashboardPage', reducer.default);
            injectSagas(sagas.default);
            renderRoute(component);
            // store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
        }
      ],
    },	  
    { // Layout 
      // path: '/newone',
      name: 'PageContainer1',
      // indexRoute: {
      //   onEnter: (nextState, replace) => replace('/')
      // },
      getComponents(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PageContainer1/reducer'),
          System.import('containers/PageContainer1/sagas'),
          System.import('containers/PageContainer1'),
        ]);
        
        // importModules.catch(errorLoading);
      },
      childRoutes: [
        {
            path: '/log',
            name: 'loginPage1',
            onEnter() {
              console.log('loading')
              // store.dispatch(loadingAction());
            },
            getComponent(nextState, cb) {
              const importModules = Promise.all([
                System.import('containers/LoginPage/reducer'),
                System.import('containers/LoginPage/sagas'),
                System.import('containers/LoginPage'),
              ]);
              const renderRoute = loadModule(cb);
              importModules.then(([reducer, sagas, component]) => {
                injectReducer('loginPage', reducer.default);
                injectSagas(sagas.default);
                renderRoute(component);
                // store.dispatch(loadedAction());
              });
              importModules.catch(errorLoading);
            },
        }
      ],
    }

  ];
}
