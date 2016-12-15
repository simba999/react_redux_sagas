// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import {getAsyncInjectors} from "utils/asyncInjectors";
import {getVideoManagerAction} from "containers/VideoManagerPage/actions";
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
        onEnter: (nextState, replace) => replace('/dashboard')
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
          store.dispatch(loadedAction());
        });
        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/dashboard',
          name: 'dashboardPage',
          onEnter() {
            console.log('loading')
            store.dispatch(loadingAction());
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
              store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
        }, {
          path: '/video-manager(/:folder_id)',
          name: 'videoManagerPage',
          ignoreScrollBehavior: true,
          onEnter() {
            store.dispatch(loadingAction());
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/VideoManagerPage/reducer'),
              System.import('containers/VideoManagerPage/sagas'),
              System.import('containers/VideoManagerPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('videoManagerPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
              let folder_id = 0;
              if (nextState.params.folder_id) {
                folder_id = nextState.params.folder_id;
              }
              store.dispatch(getVideoManagerAction(folder_id));
            });
            importModules.catch(errorLoading);
          },
        }, {
          path: '/remote-upload',
          name: 'remoteUploadPage',
          onEnter() {
            store.dispatch(loadingAction());
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/RemoteUploadPage/reducer'),
              System.import('containers/RemoteUploadPage/sagas'),
              System.import('containers/RemoteUploadPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('remoteUploadPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
              store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
        }, {
          path: '/multiple-upload',
          name: 'multipleUploadPage',
          onEnter() {
            store.dispatch(loadingAction());
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/MultipleUploadPage/reducer'),
              System.import('containers/MultipleUploadPage/sagas'),
              System.import('containers/MultipleUploadPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('multipleUploadPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
              store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
        }, {
          path: '/upload-success',
          name: 'uploadSuccessPage',
          onEnter() {
            store.dispatch(loadingAction());
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/UploadSuccessPage/reducer'),
              System.import('containers/UploadSuccessPage/sagas'),
              System.import('containers/UploadSuccessPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('uploadSuccessPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
              store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
        }
        , {
          path: '/settings',
          name: 'settingsPage',
          name: 'statisticsPage',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/settings/account')
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/SettingsPage/reducer'),
              System.import('containers/SettingsPage/sagas'),
              System.import('containers/SettingsPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('settingsPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
              store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
          childRoutes: [
            {
              path: '/settings/account',
              name: 'SettingsAccountPage',
              onEnter() {
                store.dispatch(loadingAction());
              },
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/SettingsAccountPage/reducer'),
                  System.import('containers/SettingsAccountPage/sagas'),
                  System.import('containers/SettingsAccountPage'),
                ]);
                const renderRoute = loadModule(cb);
                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('settingsAccountPage', reducer.default);
                  injectSagas(sagas.default);
                  renderRoute(component);
                  store.dispatch(loadedAction());
                });
                importModules.catch(errorLoading);
              },
            },
            {
              path: '/settings/affiliation',
              name: 'SettingsAffiliationPage',
              onEnter() {
                store.dispatch(loadingAction());
              },
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/SettingsAffiliationPage/reducer'),
                  System.import('containers/SettingsAffiliationPage/sagas'),
                  System.import('containers/SettingsAffiliationPage'),
                ]);
                const renderRoute = loadModule(cb);
                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('settingsAffiliationPage', reducer.default);
                  injectSagas(sagas.default);
                  renderRoute(component);
                  store.dispatch(loadedAction());
                });
                importModules.catch(errorLoading);
              },
            },
            {
              path: '/settings/player',
              name: 'SettingsPlayerPage',
              onEnter() {
                store.dispatch(loadingAction());
              },
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/SettingsPlayerPage/reducer'),
                  System.import('containers/SettingsPlayerPage/sagas'),
                  System.import('containers/SettingsPlayerPage'),
                ]);
                const renderRoute = loadModule(cb);
                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('settingsPlayerPage', reducer.default);
                  injectSagas(sagas.default);
                  renderRoute(component);
                  store.dispatch(loadedAction());
                });
                importModules.catch(errorLoading);
              },
            }
          ],
        }, {
          path: '/statistics',
          name: 'statisticsPage',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/statistic/income')
          },
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/StatisticsPage/reducer'),
              System.import('containers/StatisticsPage/sagas'),
              System.import('containers/StatisticsPage'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('statisticsPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
              store.dispatch(loadedAction());
            });
            importModules.catch(errorLoading);
          },
          childRoutes: [
            {
              path: '/statistics/income',
              name: 'statisticsIncome',
              onEnter() {
                store.dispatch(loadingAction());
              },
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/StatisticsIncome/reducer'),
                  System.import('containers/StatisticsIncome/sagas'),
                  System.import('containers/StatisticsIncome'),
                ]);
                const renderRoute = loadModule(cb);
                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('statisticsIncome', reducer.default);
                  injectSagas(sagas.default);
                  renderRoute(component);
                  store.dispatch(loadedAction());
                });
                importModules.catch(errorLoading);
              },
            }, {
              path: '/statistics/by_country',
              name: 'statisticsByCountry',
              onEnter() {
                store.dispatch(loadingAction());
              },
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/StatisticsByCountry/reducer'),
                  System.import('containers/StatisticsByCountry/sagas'),
                  System.import('containers/StatisticsByCountry'),
                ]);
                const renderRoute = loadModule(cb);
                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('statisticsByCountry', reducer.default);
                  injectSagas(sagas.default);
                  renderRoute(component);
                  store.dispatch(loadedAction());
                });
                importModules.catch(errorLoading);
              },
            },
          ]
        }
      ]
    }
  ];
}
