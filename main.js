    $(document).ready(function() {
        let initial_balance = 20000;
        let risk = 1;
        let open_price = 1820;
        let stop_lost_price = 1822;

        let sl_point = $('#sl_point');
        let lost_cost = $('#lost_cost');
        let lot_recommend = $('#lot_recommend');

        let to_sl_lost_value = 200;
        let to_sl_range_value = 200;
        let lot_recommend_value = 1.0;

        $('#initial_balance').on('change', function(e) {
            initial_balance = $(this).val();

            to_sl_lost();
            cal_3();
        });

        $('#risk').on('change', function(e) {
            risk = $(this).val();

            to_sl_lost();
            cal_3();
        });

        $('#open_price').on('change', function(e) {
            open_price = $(this).val();
            to_sl_range();
            cal_3();
        });

        $('#stop_lost_price').on('change', function(e) {
            stop_lost_price = $(this).val();
            to_sl_range();
            cal_3();
        });

        function to_sl_range() {
            to_sl_range_value = (Math.abs(parseFloat(open_price).toFixed(2) - parseFloat(stop_lost_price).toFixed(2)).toFixed(2) * 100).toFixed(0);
            sl_point.val(to_sl_range_value);
        }

        function to_sl_lost() {
            to_sl_lost_value = (initial_balance * risk) / 100;
            lost_cost.val(to_sl_lost_value);
        }

        function cal_3() {
            let lot_recommend_value = (to_sl_lost_value / to_sl_range_value).toFixed(2);
            lot_recommend.val(lot_recommend_value);
        }
    });