const {
    createApp
} = Vue

createApp({
    data() {
        return {
            current: {
                input_symbol: '100',
                input_balance: '20000',
                input_risk: '1',
                input_open_price: '1818.00',
                input_stop_lost_price: '1820.00',
                pipette_value: '200',
                lost_cost_value: '200',
                recommend_lot_value: '1.0',
                float_value: '100',
            }
        }
    },
    methods: {
        clear_value() {
            this.current.input_open_price = '';
            this.current.input_stop_lost_price = '';
            this.current.pipette_value = '';
            this.current.lost_cost_value = '';
            this.current.recommend_lot_value = '';
        },
        input_symbol_change(event) {
            this.clear_value();
            this.current.float_value = event.target.value;
        },
        input_balance_change(event) {
            this.main_cal();
        },
        input_risk_change(event) {
            this.main_cal();
        },
        input_open_price_change(event) {
            this.main_cal();
        },
        input_stop_lost_price_change(event) {
            this.main_cal();
        },
        main_cal(event) {
            this.current.pipette_value = (Math.abs(parseFloat(this.current.input_open_price).toFixed(2) - parseFloat(this.current.input_stop_lost_price).toFixed(2)).toFixed(2) * this.current.float_value).toFixed(0);
            this.current.lost_cost_value = (this.current.input_balance * this.current.input_risk) / this.current.float_value;
            this.current.recommend_lot_value = (this.current.lost_cost_value / this.current.pipette_value).toFixed(2);
        }
    }
}).mount('#app')