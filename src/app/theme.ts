export class Theme {

    protected customers = ['brand-one, brand-two'];
    protected generic = 'generic';

    protected setThemeByClass(): void {
        const customerName = this.getCustomerNameIfExist();
        document.body.className = '';
        if (customerName !== '') {
            document.body.classList.add(customerName);
        } else {
            this.setDefaultThemeByClass();
        }
    }

    private getCustomerNameIfExist(): string {
        // const URL = location.href;
        // let name = '';
        // this.customers.forEach(customer => {
        //     if (URL.includes(customer)) {
        //         name = customer;
        //         return name;
        //     }
        // });

        return 'brand-one';
    }

    private setDefaultThemeByClass() {
        document.body.classList.add(this.generic);
    }

}