'use strict';

(function () {

angular
  .module('bitcoincom.controllers')
  .controller('buyBitcoinWelcomeController', buyBitcoinWelcomeController);

  function buyBitcoinWelcomeController(
    gettextCatalog, 
    $ionicHistory,
    $log, 
    moonPayService,
    ongoingProcess, 
    popupService, 
    $scope
    ) {
    var vm = this;

    // Functions
    vm.getStarted = getStarted;

    function initVariables() {
      vm.email = 'bla';
    }

    $scope.$on("$ionicView.beforeEnter", onBeforeEnter);


    function getStarted() {
      $log.debug('getStarted() with email: ' + vm.email);

      ongoingProcess.set('creatingCustomerId', true);
      // TODO: Some validation of email.
      moonPayService.createCustomer(vm.email).then(
        function onCustomerCreated(customer) {
          console.log('Created customer.', customer);
        },
        function onCustomerCreationFailed(err) {
          console.error('Error creating customer.', err);
        }
      );
      
      /*
      if (!vm.email) {
        var title = 'Title';
        var msg = gettextCatalog('Enter an email address.');
        popupService.showAlert(title, msg, function onAlertShown(){});
        return;
      }
      */
    }
    

    function onBeforeEnter(event, data) {
      initVariables();

      //moonPayService.
    }
  }


})();
