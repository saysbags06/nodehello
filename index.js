const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { ruparumaCookie, magnezoneCookie, alfastoreCookie, ellenhardCookie, natarumaCookie, nordhenhomecookie, nirvanastorycookie } = require('./cookies');

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
            // Magnezone: [
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lt6kltgh_AzDftzTy_GvxI_4gLg_BeKA_aBTRfPruL4zw&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=ZuJEzsqiBqzNYffRokL4Y0NtzgFoohvRw8bHZNpqRZBPaawPt49n7toczQ1UEdPIUVi6_bi6fXV9xvbdzoYx4Pisj9-2_g7u3LoX_0shVb7Tl9VKdRSZzA==&X-Bogus=DFSzswVONlkANVbotouqi8RhGwAE&_signature=_02B4Z6wo00001Zqkv7AAAIDB9MCJ3y1XYj2apLMAAAN30e',
            //         headers: {
            //             'Cookie': magnezoneCookie
            //         }
            //     },
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7495096606395632368&aid=4068&app_name=i18n_ecom_shop&fp=verify_lt6kltgh_AzDftzTy_GvxI_4gLg_BeKA_aBTRfPruL4zw&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7495096606395632368&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=ZuJEzsqiBqzNYffRokL4Y0NtzgFoohvRw8bHZNpqRZBPaawPt49n7toczQ1UEdPIUVi6_bi6fXV9xvbdzoYx4Pisj9-2_g7u3LoX_0shVb7Tl9VKdRSZzA==&X-Bogus=DFSzswjLACiANn0qtouqDSRhGwUm&_signature=_02B4Z6wo00001GNFI2gAAIDADSEVBA0QHuRjRS.AAH0W04',
            //         headers: {
            //             'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
            //             'sec-ch-ua-mobile': '?0',
            //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            //             'X-Tt-Oec-Region': 'ID',
            //             'sec-ch-ua-platform': '"Windows"',
            //             'Accept': '*/*',
            //             'Sec-Fetch-Site': 'same-origin',
            //             'Sec-Fetch-Mode': 'cors',
            //             'Sec-Fetch-Dest': 'empty',
            //             'host': 'seller-id.tokopedia.com',
            //             'Cookie': magnezoneCookie
            //         }
            //     }
            // ],
            // Alfastore: [
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsv3okiq_rPmrwfrR_z76T_4SQy_AJ1x_5uy9wsbPJizO&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=JYTu3mwbV9wjpKS4x5MUaqlvrJNEOu_y-LHPFYhJYf7vWWIq53j5Ubc_wG34ZH5-oiW_X_sjdl89MXmR8ZCmtCCBYBMVElG7w2Y0KEQgxaVpIyUP4ES7&X-Bogus=DFSzswVOWHiANVbotoujK8RhGwUb&_signature=_02B4Z6wo00001FtK1mwAAIDANS7gAOtdcgxbStLAAHMU24',
            //         headers: {
            //             'Cookie': alfastoreCookie
            //         }
            //     },
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7494083723375249289&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsv3okiq_rPmrwfrR_z76T_4SQy_AJ1x_5uy9wsbPJizO&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7494083723375249289&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=JYTu3mwbV9wjpKS4x5MUaqlvrJNEOu_y-LHPFYhJYf7vWWIq53j5Ubc_wG34ZH5-oiW_X_sjdl89MXmR8ZCmtCCBYBMVElG7w2Y0KEQgxaVpIyUP4ES7&X-Bogus=DFSzswjO3GvANxtStouj/uRhGwUi&_signature=_02B4Z6wo00001hN8kewAAIDCfRing.UvJ0oTfJ1AAOEO43',
            //         headers: {
            //             'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
            //             'sec-ch-ua-mobile': '?0',
            //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            //             'X-Tt-Oec-Region': 'ID',
            //             'sec-ch-ua-platform': '"Windows"',
            //             'Accept': '*/*',
            //             'Sec-Fetch-Site': 'same-origin',
            //             'Sec-Fetch-Mode': 'cors',
            //             'Sec-Fetch-Dest': 'empty',
            //             'host': 'seller-id.tokopedia.com',
            //             'Cookie': alfastoreCookie
            //         }
            //     }
            // ],
            // Ellenhard: [
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lt28xisp_TKFWCoTa_fNgI_4KGC_9qC1_Oh8yVVZL33b2&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=m1woR3jtH-wAM09ok91k1NoKH7C-eyRNKgiYy_VF8lvhZo8FEGP2Jx9gb3m_Td2kEOCJURI3z0X-94qtX2lEsLsJ5NrqzuG3VZVBnczM0Z6hW5Zh9ejK&X-Bogus=DFSzswVOiVJANVbotouJnuRhGwA/&_signature=_02B4Z6wo00001cKFIJQAAIDBrOEW-YS7x3XChSQAABWAb6',
            //         headers: {
            //             'Cookie': ellenhardCookie
            //         }
            //     },
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7494660166090591044&aid=4068&app_name=i18n_ecom_shop&fp=verify_lt28xisp_TKFWCoTa_fNgI_4KGC_9qC1_Oh8yVVZL33b2&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7494660166090591044&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=m1woR3jtH-wAM09ok91k1NoKH7C-eyRNKgiYy_VF8lvhZo8FEGP2Jx9gb3m_Td2kEOCJURI3z0X-94qtX2lEsLsJ5NrqzuG3VZVBnczM0Z6hW5Zh9ejK&X-Bogus=DFSzswju14sANtrDtouJd8RhGwA/&_signature=_02B4Z6wo00001dfb47QAAIDBub.V2xf0qyHX2-8AABAq41',
            //         headers: {
            //             'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
            //             'sec-ch-ua-mobile': '?0',
            //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            //             'X-Tt-Oec-Region': 'ID',
            //             'sec-ch-ua-platform': '"Windows"',
            //             'Accept': '*/*',
            //             'Sec-Fetch-Site': 'same-origin',
            //             'Sec-Fetch-Mode': 'cors',
            //             'Sec-Fetch-Dest': 'empty',
            //             'host': 'seller-id.tokopedia.com',
            //             'Cookie': ellenhardCookie
            //         }
            //     }
            // ],
            // Nataruma: [
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsxzt5s3_tlVEUyYB_4FTq_44zO_9mPb_14TGb31yxSB9&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=Mjt-KAjuCqEtzU2OtV_NIgBstJn45pZmLPsWoEZcgos6FjGYCr0BvCb8pECeQFREChqdLwxeZi4_zF98iuV5PajcVKCtH2uVYHd3kG1SfnG_KvT_Wbek&X-Bogus=DFSzswVECIzANjNMtoune8RhGwWD&_signature=_02B4Z6wo00001vOCyHwAAIDCneb-EDuNqDbzgsTAANlMac',
            //         headers: {
            //             'Cookie': natarumaCookie
            //         }
            //     },
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7494662190079838440&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsxzt5s3_tlVEUyYB_4FTq_44zO_9mPb_14TGb31yxSB9&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7494662190079838440&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=Mjt-KAjuCqEtzU2OtV_NIgBstJn45pZmLPsWoEZcgos6FjGYCr0BvCb8pECeQFREChqdLwxeZi4_zF98iuV5PajcVKCtH2uVYHd3kG1SfnG_KvT_Wbek&X-Bogus=DFSzswjLHiiANn0qtounuWRhGwAW&_signature=_02B4Z6wo000015EORugAAIDD.2pwhuoANT-RDkpAAIGkb3',
            //         headers: {
            //             'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
            //             'sec-ch-ua-mobile': '?0',
            //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            //             'X-Tt-Oec-Region': 'ID',
            //             'sec-ch-ua-platform': '"Windows"',
            //             'Accept': '*/*',
            //             'Sec-Fetch-Site': 'same-origin',
            //             'Sec-Fetch-Mode': 'cors',
            //             'Sec-Fetch-Dest': 'empty',
            //             'host': 'seller-id.tokopedia.com',
            //             'Cookie': natarumaCookie
            //         }
            //     }
            // ],
            // Nordhenhome: [
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsy8zqm6_u1nm7h70_CL75_4U1T_AIne_dArP3oVOTW0r&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=dLL3IAkYjuWIyd8pwatn7zo_o5xFQ_mI44iWukDbLlQ3NMp6NG-4tB3GjorpeQt6o41Ic4t9sgPXWQl0ngqe7OHRnNL4Z5xGlWCmqv_ibXP5wn_7s4lA&X-Bogus=DFSzswVET3vANjNMtouSg8RhGwli&_signature=_02B4Z6wo00001zgwVgQAAIDDVlRgaaRbEzs4MFqAAKve3c',
            //         headers: {
            //             'Cookie': nordhenhomecookie
            //         }
            //     },
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7494663795264489557&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsy8zqm6_u1nm7h70_CL75_4U1T_AIne_dArP3oVOTW0r&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7494663795264489557&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=dLL3IAkYjuWIyd8pwatn7zo_o5xFQ_mI44iWukDbLlQ3NMp6NG-4tB3GjorpeQt6o41Ic4t9sgPXWQl0ngqe7OHRnNL4Z5xGlWCmqv_ibXP5wn_7s4lA&X-Bogus=DFSzswjLKnzANn0qtouSNSRhGwU7&_signature=_02B4Z6wo00001pOlVwgAAIDC.cFhZ5scHSKTpVuAAMFC36',
            //         headers: {
            //             'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
            //             'sec-ch-ua-mobile': '?0',
            //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            //             'X-Tt-Oec-Region': 'ID',
            //             'sec-ch-ua-platform': '"Windows"',
            //             'Accept': '*/*',
            //             'Sec-Fetch-Site': 'same-origin',
            //             'Sec-Fetch-Mode': 'cors',
            //             'Sec-Fetch-Dest': 'empty',
            //             'host': 'seller-id.tokopedia.com',
            //             'Cookie': nordhenhomecookie
            //         }
            //     }
            // ],
            // Nirvanastory: [
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lt0sy0m1_lWnjT6wx_jZpF_4djG_8xwj_sxZvcP1eBnR9&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=DL8zLPzaKs6dOLgC6kf7UlROyd40PZCImLrRZpHr1t35RqiK6QSUE7MZP-GaDWxkSo3pWe16KxVeoFh-1JyFF1kFw79xtpUzNM9u3Vx29yJq2yofa_kG&X-Bogus=DFSzswVOzC2ANVbotoutTuRhGwAy&_signature=_02B4Z6wo00001g8h6HAAAIDCYUXeHcX1WtIPIezAAOYl4b',
            //         headers: {
            //             'Cookie': nirvanastorycookie
            //         }
            //     },
            //     {
            //         url: 'https://seller-id.tokopedia.com/api/v1/seller/experience-score/score-overview?locale=id-ID&language=id&oec_seller_id=7494666421135968966&aid=4068&app_name=i18n_ecom_shop&fp=verify_lt0sy0m1_lWnjT6wx_jZpF_4djG_8xwj_sxZvcP1eBnR9&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&shop_id=7494666421135968966&shop_region=ID&ses_version=release&global_seller_type=Local&msToken=DL8zLPzaKs6dOLgC6kf7UlROyd40PZCImLrRZpHr1t35RqiK6QSUE7MZP-GaDWxkSo3pWe16KxVeoFh-1JyFF1kFw79xtpUzNM9u3Vx29yJq2yofa_kG&X-Bogus=DFSzswjOOCUANxtStoutY8RhGwUi&_signature=_02B4Z6wo00001hgxcHgAAIDCdlVGFfwHNSIYMXzAAOPh2c',
            //         headers: {
            //             'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
            //             'sec-ch-ua-mobile': '?0',
            //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            //             'X-Tt-Oec-Region': 'ID',
            //             'sec-ch-ua-platform': '"Windows"',
            //             'Accept': '*/*',
            //             'Sec-Fetch-Site': 'same-origin',
            //             'Sec-Fetch-Mode': 'cors',
            //             'Sec-Fetch-Dest': 'empty',
            //             'host': 'seller-id.tokopedia.com',
            //             'Cookie': nirvanastorycookie
            //         }
            //     }
            // ],

            // Anda dapat menambahkan toko lainnya di sini
        };

        const responsesByStore = {};

        // Lakukan permintaan untuk setiap toko secara terpisah
        for (const store in requestsByStore) {
            const responses = await Promise.all(requestsByStore[store].map(async (item) => {
                const response = await axios.get(item.url, { headers: item.headers });
                return response.data;
            }));

            responsesByStore[store] = responses;
        }

        // Proses data dari respons untuk setiap toko
        const dataByStore = {};
        for (const store in responsesByStore) {
            const sellerData = {
                shopName: responsesByStore[store][0].data.seller.shop_name,
                sellerlogo: responsesByStore[store][0].data.seller.logo,
                shopStatus: responsesByStore[store][0].data.seller.shop_status,
                // Anda bisa menambahkan lebih banyak bagian yang Anda inginkan dari respons pertama di sini
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

        // Mengurutkan data berdasarkan overview.score dari tertinggi ke terendah
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