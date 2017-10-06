const container = (function () {
    const database2 = database()
    const modelFactory2 = modelFactory()

    const formController = formControllerFunc(database2, modelFactory2)
    const expensesController = expensesControllerFunc(database2, modelFactory2)
    const incomeController = incomeControllerFunc(database2, modelFactory2)
    const navbarController = navbarControllerFunc(database2, modelFactory2)
    const sidepanelController = sidePanelControllerFunc(database2)

    return {
        formController,
        expensesController,
        incomeController,
        navbarController,
        sidepanelController
    }
}())