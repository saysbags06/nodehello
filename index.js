const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { ruparumaCookie } = require('./cookies');

const app = express();

app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
        const requestsByStore = {
            ruparuma: [
                {
                    url: 'https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsy8xv4f_08WZLylG_kOZI_4q1A_AtrH_Qk7Rum0Rw3C6&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F121.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=YA42_Aod1-y2Pwx9K_sVxuw6Vkd4y6iSmduUKg8cG5Zjo9OP-GBuuXs4HnJHHeadaLIJviMtgJLpXWAnQMXV-CkDnlK8exp-IOWE0LZZ7viyD8118MfH&X-Bogus=DFSzswVODrzANVsUtonw-SRhGwA8&_signature=_02B4Z6wo000011sHW5AAAIDDNWNt.dAod1NbB18AALMkb7',
                    headers: {
                        'Cookie': ruparumaCookie
                    }
                },
                {
                    url: 'https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7494083546750289886&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsy8xv4f_08WZLylG_kOZI_4q1A_AtrH_Qk7Rum0Rw3C6&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F121.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7494083546750289886&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=YA42_Aod1-y2Pwx9K_sVxuw6Vkd4y6iSmduUKg8cG5Zjo9OP-GBuuXs4HnJHHeadaLIJviMtgJLpXWAnQMXV-CkDnlK8exp-IOWE0LZZ7viyD8118MfH&X-Bogus=DFSzswjudqiANjpQtonw8WRhGwAs&_signature=_02B4Z6wo00001gvsifwAAIDCZYi.khxrZFoL7IVAAOcx0c',
                    headers: {
                        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
                        'sec-ch-ua-mobile': '?0',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                        'X-Tt-Oec-Region': 'ID',
                        'sec-ch-ua-platform': '"Windows"',
                        'Accept': '*/*',
                        'Sec-Fetch-Site': 'same-origin',
                        'Sec-Fetch-Mode': 'cors',
                        'Sec-Fetch-Dest': 'empty',
                        'host': 'seller-id.tokopedia.com',
                        'Cookie': ruparumaCookie
                    }
                }
            ],
            

        };

        const responsesByStore = {};

        for (const store in requestsByStore) {
            const responses = await Promise.all(requestsByStore[store].map(async (item) => {
                const response = await axios.get(item.url, { headers: item.headers });
                return response.data;
            }));

            responsesByStore[store] = responses;
        }

        const dataByStore = {};
        for (const store in responsesByStore) {
            const sellerData = {
                shopName: responsesByStore[store][0].data.seller.shop_name,
                sellerlogo: responsesByStore[store][0].data.seller.logo,
                shopStatus: responsesByStore[store][0].data.seller.shop_status,
            };

            const scoreOverview = {
                score: responsesByStore[store][1].data.overview.score,
                rank: responsesByStore[store][1].data.overview.rank,
                category: responsesByStore[store][1].data.overview.category,
                metrikdata: responsesByStore[store][1].data.metric.metricGroups
                // Anda bisa menambahkan lebih banyak bagian yang Anda inginkan dari respons kedua di sini
            };

            dataByStore[store] = {
                sellerData: sellerData,
                scoreOverview: scoreOverview
            };
        }

        const sortedData = Object.keys(dataByStore).sort((a, b) => dataByStore[b].scoreOverview.score - dataByStore[a].scoreOverview.score)
            .reduce((obj, key) => {
                obj[key] = dataByStore[key];
                return obj;
            }, {});

        res.json(sortedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});