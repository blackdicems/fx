const {
    createApp
} = Vue

createApp({
    data() {
        return {
            input_symbol: 'xauusd',
            input_balance: 20000,
            input_risk: 1,
            input_open_price: 1820,
            input_stop_lost_price: 1822,
            pipette_value: 200,
            lost_cost_value: 200,
            recommend_lot_value: 0.1,
        }
    },
    methods: {
        input_balance_change(event) {
            this.to_sl_lost();
            this.main_cal();
        },
        input_risk_change(event) {
            this.to_sl_lost();
            this.main_cal();
        },
        input_open_price_change(event) {
            this.to_sl_range();
            this.main_cal();
        },
        input_stop_lost_price_change(event) {
            this.to_sl_range();
            this.main_cal();
        },
        to_sl_range(event) {
            this.pipette_value = (Math.abs(parseFloat(this.input_open_price).toFixed(2) - parseFloat(this.input_stop_lost_price).toFixed(2)).toFixed(2) * 100).toFixed(0);
        },
        to_sl_lost(event) {
            this.lost_cost_value = (this.input_balance * this.input_risk) / 100;
        },
        main_cal(event) {
            this.recommend_lot_value = (this.lost_cost_value / this.pipette_value).toFixed(2);
        }
    }
}).mount('#app')