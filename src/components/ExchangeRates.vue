<template>
    <div>
        <currency-converter></currency-converter>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th colspan="4" style="text-align:center">當日匯率一覽</th>
                    </tr>
                    <tr>
                        <th>置頂</th>
                        <th>貨幣</th>
                        <th>台幣兌外幣</th>
                        <th>外幣兌台幣</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rate, code) in sortedRates" :key="code">
                        <td><input type="checkbox" v-model="selectedCurrencies" :value="code"
                                style="width: 30px; margin-bottom: 10px;"></td>
                        <td>{{ code }}&nbsp;&nbsp;{{ currencyMap[code] || '未知貨幣' }}</td>
                        <td>{{ rate }}</td>
                        <td>{{ computeInverseRate(rate) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import CurrencyConverter from './TWDExchange.vue';

export default {
    name: 'ExchangeRates',
    components: {
        'CurrencyConverter': CurrencyConverter,
    },
    data() {
        return {
            selectedCurrencies: [],
            currencyMap: {
                TWD: '新台幣',
                AED: '阿聯酋迪拉姆',
                AFN: '阿富汗尼',
                ALL: '阿爾巴尼亞列克',
                AMD: '亞美尼亞德拉姆',
                ANG: '荷屬安的列斯盾',
                AOA: '安哥拉寬扎',
                ARS: '阿根廷比索',
                AUD: '澳元',
                AWG: '阿魯巴盾',
                AZN: '亞塞拜疆馬納特',
                BAM: '波斯尼亞可兌換馬克',
                BBD: '巴巴多斯元',
                BDT: '孟加拉塔卡',
                BGN: '保加利亞列弗',
                BHD: '巴林第納爾',
                BIF: '布隆迪法郎',
                BMD: '百慕達元',
                BND: '文萊元',
                BOB: '玻利維亞諾',
                BRL: '巴西里亞伊',
                BSD: '巴哈馬元',
                BTN: '不丹努爾特魯姆',
                BWP: '博茨瓦納普拉',
                BYN: '白俄羅斯盧布',
                BZD: '伯利茲元',
                CAD: '加拿大元',
                CDF: '剛果法郎',
                CHF: '瑞士法郎',
                CLP: '智利比索',
                CNY: '人民幣',
                COP: '哥倫比亞比索',
                CRC: '哥斯達黎加科朗',
                CUP: '古巴比索',
                CVE: '佛得角埃斯庫多',
                CZK: '捷克克朗',
                DJF: '吉布提法郎',
                DKK: '丹麥克朗',
                DOP: '多米尼加比索',
                DZD: '阿爾及利亞第納爾',
                EGP: '埃及鎊',
                ERN: '厄立特里亞納克法',
                ETB: '埃塞俄比亞比爾',
                EUR: '歐元',
                FJD: '斐濟元',
                FKP: '福克蘭群島鎊',
                FOK: '法羅群島克朗',
                GBP: '英鎊',
                GEL: '喬治亞拉里',
                GGP: '根西鎊',
                GHS: '加納塞地',
                GIP: '直布羅陀鎊',
                GMD: '岡比亞達拉西',
                GNF: '幾內亞法郎',
                GTQ: '危地馬拉格查爾',
                GYD: '圭亞那元',
                HKD: '港元',
                HNL: '洪都拉斯倫皮拉',
                HRK: '克羅地亞庫納',
                HTG: '海地古德',
                HUF: '匈牙利福林',
                IDR: '印尼盾',
                ILS: '以色列新謝克爾',
                IMP: '馬恩島鎊',
                INR: '印度盧比',
                IQD: '伊拉克第納爾',
                IRR: '伊朗里亞爾',
                ISK: '冰島島克朗',
                JEP: '澤西鎊',
                JMD: '牙買加元',
                JOD: '約旦第納爾',
                JPY: '日元',
                KES: '肯尼亞先令',
                KGS: '吉爾吉斯斯坦索姆',
                KHR: '柬埔寨瑞爾',
                KID: '基里巴斯元',
                KMF: '科摩羅法郎',
                KRW: '韓圓',
                KWD: '科威特第納爾',
                KYD: '開曼群島元',
                KZT: '哈薩克斯坦坚戈',
                LAK: '老撾基普',
                LBP: '黎巴嫩鎊',
                LKR: '斯里蘭卡盧比',
                LRD: '利比里亞元',
                LSL: '萊索托洛蒂',
                LYD: '利比亞第納爾',
                MAD: '摩洛哥迪拉姆',
                MDL: '摩爾多瓦列伊',
                MGA: '馬達加斯加阿里亞里',
                MKD: '馬其頓第納爾',
                MMK: '緬甸元',
                MNT: '蒙古圖格里克',
                MOP: '澳門元',
                MRU: '毛里塔尼亞烏吉亞',
                MUR: '毛里求斯盧比',
                MVR: '馬爾代夫盧非亞',
                MWK: '馬拉維克瓦查',
                MXN: '墨西哥比索',
                MYR: '馬來西亞令吉',
                MZN: '莫桑比克梅蒂卡爾',
                NAD: '納米比亞元',
                NGN: '尼日利亞奈拉',
                NIO: '尼加拉瓜科多巴',
                NOK: '挪威克朗',
                NPR: '尼泊爾盧比',
                NZD: '新西蘭元',
                OMR: '阿曼里亞爾',
                PAB: '巴拿馬巴波亞',
                PEN: '秘魯新索爾',
                PGK: '巴布亞新幾內亞基那',
                PHP: '菲律賓披索',
                PKR: '巴基斯坦盧比',
                PLN: '波蘭茲羅提',
                PYG: '巴拉圭瓜拉尼',
                QAR: '卡塔爾里亞爾',
                RON: '羅馬尼亞列伊',
                RSD: '塞爾維亞第納爾',
                RUB: '俄羅斯盧布',
                RWF: '盧旺達法郎',
                SAR: '沙特阿拉伯里亞爾',
                SBD: '所羅門群島元',
                SCR: '塞舌爾盧比',
                SDG: '蘇丹鎊',
                SEK: '瑞典克朗',
                SGD: '新加坡元',
                SHP: '聖赫勒拿鎊',
                SLE: '塞拉利昂新利昂',
                SLL: '塞拉利昂利昂',
                SOS: '索馬里先令',
                SRD: '蘇里南元',
                SSP: '南蘇丹鎊',
                STN: '聖多美和普林西比多布拉',
                SYP: '敘利亞鎊',
                SZL: '斯威士蘭里蘭吉尼',
                THB: '泰銖',
                TJS: '塔吉克斯坦索莫尼',
                TMT: '土庫曼斯坦馬納特',
                TND: '突尼斯第納爾',
                TOP: '湯加潘加',
                TRY: '土耳其里拉',
                TTD: '千里達及托巴哥元',
                TVD: '圖瓦盧元',
                TZS: '坦桑尼亞先令',
                UAH: '烏克蘭赫里納',
                UGX: '烏干達先令',
                USD: '美元',
                UYU: '烏拉圭披索',
                UZS: '烏茲別克索姆',
                VES: '委內瑞拉玻利瓦爾',
                VND: '越南盾',
                VUV: '瓦努阿圖瓦圖',
                WST: '薩摩亞塔拉',
                XAF: '中非金融合作法郎',
                XCD: '東加勒比元',
                XDR: '特殊提款權',
                XOF: '西非法郎',
                XPF: '太平洋法郎',
                YER: '也門里亞爾',
                ZAR: '南非蘭特',
                ZMW: '贊比亞克瓦查',
                ZWL: '辛巴威元'
            },
            rates: {}
        };
    },
    watch: {
        // 監控 selectedCurrencies 的變化
        selectedCurrencies: {
            handler() {
                this.saveSelectedCurrencies(); // 保存到 localStorage
            },
            deep: true // 深度監控對象內部變化
        }
    },
    computed: {
        sortedRates() {
            const selected = {};
            const unselected = {};
            Object.keys(this.rates).forEach(code => {
                if (this.selectedCurrencies.includes(code)) {
                    selected[code] = this.rates[code];
                } else {
                    unselected[code] = this.rates[code];
                }
            });
            return { ...selected, ...unselected };
        }
    },
    created() {
        this.fetchRates();
        this.loadSelectedCurrencies();
    },
    beforeDestroy() {
        this.saveSelectedCurrencies();
    },
    methods: {
        async fetchRates() {
            const response = await axios.get('https://api.exchangerate-api.com/v4/latest/TWD');
            this.rates = response.data.rates;
        },
        loadSelectedCurrencies() {
            const currencies = localStorage.getItem('selectedCurrencies');
            if (currencies) {
                this.selectedCurrencies = JSON.parse(currencies);
            } else {
                // 如果 localStorage 為空，則使用以下預設貨幣列表
                this.selectedCurrencies = ['USD', 'EUR', 'JPY', 'GBP', 'CNY', 'HKD'];
            }
        },
        saveSelectedCurrencies() {
            localStorage.setItem('selectedCurrencies', JSON.stringify(this.selectedCurrencies));
        },
        computeInverseRate(rate) {
            return rate > 0 ? (1 / rate).toFixed(2) : 'N/A';
        }
    }
};
</script>

<style scoped>
.table-container {
    display: flex;
    justify-content: center;
}

table {
    width: 60%;
    /* 表格寬度為容器的 80% */
    margin: 20px 10px;
    /* 添加上下邊距 */
    border-collapse: separate;
    /* 讓 border-spacing 生效 */
    border-spacing: 0;
    /* 移除格子之間的間隔 */
    border: 2px solid #333;
    /* 添加外框 */
    border-radius: 8px;
    /* 圓角邊框 */
    overflow: hidden;
    /* 處理圓角和滾動的問題 */
    background-color: #fff;
    /* 背景色 */
}

th,
td {
    padding: 12px 50px;
    border-bottom: 1px solid #ccc;
    /* 給表格項目添加底線 */
    text-align: start;
}

@media (max-width: 600px) {

    th,
    td {
        padding: 12px 10px;
        /* 在手機上調整內邊距 */
    }

    table{
        width: 90%;
    }
}

th {

    background-color: #f4f4f4;
}

tbody tr:last-child td {
    border-bottom: none;
    /* 移除最後一行的底線 */
}

tbody tr:hover {
    background-color: #f9f9f9;
    /* 滑過時變更背景色 */
}
</style>
