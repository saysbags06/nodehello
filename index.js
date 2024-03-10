
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
        const requestsByStore = {
            ruparuma: [
                {
                    url: 'https://seller-id.tokopedia.com/api/v1/seller/common/get?locale=id-ID&language=id&oec_seller_id=&aid=4068&app_name=i18n_ecom_shop&fp=verify_lsy8xv4f_08WZLylG_kOZI_4q1A_AtrH_Qk7Rum0Rw3C6&device_platform=web&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F121.0.0.0%20Safari%2F537.36&browser_online=true&timezone_name=Asia%2FJakarta&need_verify_account=true&default_region=ID&msToken=YA42_Aod1-y2Pwx9K_sVxuw6Vkd4y6iSmduUKg8cG5Zjo9OP-GBuuXs4HnJHHeadaLIJviMtgJLpXWAnQMXV-CkDnlK8exp-IOWE0LZZ7viyD8118MfH&X-Bogus=DFSzswVODrzANVsUtonw-SRhGwA8&_signature=_02B4Z6wo000011sHW5AAAIDDNWNt.dAod1NbB18AALMkb7',
                    headers: {
                        'Cookie': '_fbp=fb.0.1679292813331.1874530587; _tt_enable_cookie=1; _ttp=2NGaL2QtUkUawRaoC9qzplG1Zg0; passport_csrf_token=21df854add60519c1a85a7bbab5ba6c0; passport_csrf_token_default=21df854add60519c1a85a7bbab5ba6c0; ttwid=1%7CSDnyyH3mDv3q37DEdtJFkYYBeeD-o_yDgG58R-iUwZc%7C1710045945%7Cb5231251650704af78e8adac293fe3abf70cf3ee244fb1344529acdbf7b0667c; d_ticket=e33cb09b11b2c85d18fd22d6a6f20977ff92f; odin_tt=5535a24d6d5b17bbe336e8b830a0cc7139b21833338f658e6069a5219ddeca2f01bfdad1c00f0ad004658f548a4e07b9554b43d55f91c68ad20a19e8a3f8bdc8; sso_auth_status=04321fb7f9eff57f80bb40ae3369ab9e; sso_auth_status_ss=04321fb7f9eff57f80bb40ae3369ab9e; sso_uid_tt=d9e8756bda62d5b4182ca5f19b88778547f1137fcb5ec38dd205160f13af6e1f; sso_uid_tt_ss=d9e8756bda62d5b4182ca5f19b88778547f1137fcb5ec38dd205160f13af6e1f; toutiao_sso_user=38eb5e0b1e8191b3730083eda510bed9; toutiao_sso_user_ss=38eb5e0b1e8191b3730083eda510bed9; sid_ucp_sso_v1=1.0.0-KDVhNWQ5NzZkYjI3YjhmMzEyNzA2OTAwZGQwYWEyNTFjZWZkODcxMGMKIAiBiIzq1Kju7mEQ5OOZrwYY5B8gDDCs-viOBjgBQOsHEAMaBm1hbGl2YSIgMzhlYjVlMGIxZTgxOTFiMzczMDA4M2VkYTUxMGJlZDk; ssid_ucp_sso_v1=1.0.0-KDVhNWQ5NzZkYjI3YjhmMzEyNzA2OTAwZGQwYWEyNTFjZWZkODcxMGMKIAiBiIzq1Kju7mEQ5OOZrwYY5B8gDDCs-viOBjgBQOsHEAMaBm1hbGl2YSIgMzhlYjVlMGIxZTgxOTFiMzczMDA4M2VkYTUxMGJlZDk; sid_guard=13a4c5e3260b79adf35e9a3aa500a2ac%7C1709601252%7C864000%7CFri%2C+15-Mar-2024+01%3A14%3A12+GMT; uid_tt=ade44bc3d56f046a2c5481cf3b6b16d956d905c53156496e7c490c35db054b43; uid_tt_ss=ade44bc3d56f046a2c5481cf3b6b16d956d905c53156496e7c490c35db054b43; sid_tt=13a4c5e3260b79adf35e9a3aa500a2ac; sessionid=13a4c5e3260b79adf35e9a3aa500a2ac; sessionid_ss=13a4c5e3260b79adf35e9a3aa500a2ac; sid_ucp_v1=1.0.0-KGM0ZTg2NTViZjQ1OWQ2ZjFkMWUyZjFjNzMwMmFkZWNlMmU2NGRjN2EKGgiBiIzq1Kju7mEQ5OOZrwYY5B8gDDgBQOsHEAMaA215MiIgMTNhNGM1ZTMyNjBiNzlhZGYzNWU5YTNhYTUwMGEyYWM; ssid_ucp_v1=1.0.0-KGM0ZTg2NTViZjQ1OWQ2ZjFkMWUyZjFjNzMwMmFkZWNlMmU2NGRjN2EKGgiBiIzq1Kju7mEQ5OOZrwYY5B8gDDgBQOsHEAMaA215MiIgMTNhNGM1ZTMyNjBiNzlhZGYzNWU5YTNhYTUwMGEyYWM; _ga_W44EJN0C49=GS1.1.1708395137.1.0.1708395137.0.0.0; _ga=GA1.1.1665946585.1708395137; msToken=ihVBLGVDP34D19uDBkVaFweNLm7y_UYqHdaJdRM177QSwoO4FoklHF2Ef0bKLNBriKCYpUgPrii7QYkKqChfkmiVcPTiYWa_MRL0uCB83FSONNd3Zm8FLQ==; gf_canary_88990=35; i18next=id-ID; s_v_web_id=verify_ltdofuk9_Nt9eWomF_IdjF_4Lsn_Aibh_pc23tXrkAcEV; csrf_session_id=582b0030ca50c25a35693b64be6f0f77; gf_part_1237467=32; gf_part_1237470=80; user_oec_info=0a5361483b94d53fa67c00c8ad0169d269840ed5731bd04bda01404facb78732f8a814cab913e788b2216a19d7a25ea9dd03f86458ca10334ed49497d0e26621538999f31756260fe549575907bb3d829a41b8656c1a490a3ca2f06bad63cdf07f61c96c18be31720199b8bb6361ca100f3ed94c4ee454bcc9dc2df97cf6ad19e4388ecefcde8cba00f000c6f9dab916deae91021410f3c4cb0d1886d2f6f20d22010426207397; gf_part_1243002=58; gf_part_1246674=94; gf_part_1250401=50; gf_part_1250506=42; lang_type=id; gf_part_1275029=43; gf_part_1290770=80; gf_part_1291063=15; gf_part_1296999=39; gf_part_1305805=21; gf_part_1327625=88; gd_random_1333213=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAzMTE1NjcsImlhdCI6MTcwOTcwNjc2NywibWF0Y2giOnRydWUsIm5iZiI6MTcwOTcwNjc2NywicGF0aCI6Ii8iLCJwZXJjZW50IjowLjMyMTg2MTI3NTk4OTE3ODl9.5K6ZMFjSW819vq6-1O0rEXXcUQ1QeJbzl3XYWGK9wnE; msToken=f_kcPKU4dk_cmiL-nFUgC_LIuvLmZLU8dDhUBtH35SC2vAM195Di6hEtzIKx5sjirY-oKVFx3-wd_x5KhSh1Ra-IYtRZKHP0EEPoQ8tzvU8eirs0Is0C'
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
                        'Cookie': '_fbp=fb.0.1679292813331.1874530587; _tt_enable_cookie=1; _ttp=2NGaL2QtUkUawRaoC9qzplG1Zg0; passport_csrf_token=21df854add60519c1a85a7bbab5ba6c0; passport_csrf_token_default=21df854add60519c1a85a7bbab5ba6c0; ttwid=1%7CSDnyyH3mDv3q37DEdtJFkYYBeeD-o_yDgG58R-iUwZc%7C1710045945%7Cb5231251650704af78e8adac293fe3abf70cf3ee244fb1344529acdbf7b0667c; d_ticket=e33cb09b11b2c85d18fd22d6a6f20977ff92f; odin_tt=5535a24d6d5b17bbe336e8b830a0cc7139b21833338f658e6069a5219ddeca2f01bfdad1c00f0ad004658f548a4e07b9554b43d55f91c68ad20a19e8a3f8bdc8; sso_auth_status=04321fb7f9eff57f80bb40ae3369ab9e; sso_auth_status_ss=04321fb7f9eff57f80bb40ae3369ab9e; sso_uid_tt=d9e8756bda62d5b4182ca5f19b88778547f1137fcb5ec38dd205160f13af6e1f; sso_uid_tt_ss=d9e8756bda62d5b4182ca5f19b88778547f1137fcb5ec38dd205160f13af6e1f; toutiao_sso_user=38eb5e0b1e8191b3730083eda510bed9; toutiao_sso_user_ss=38eb5e0b1e8191b3730083eda510bed9; sid_ucp_sso_v1=1.0.0-KDVhNWQ5NzZkYjI3YjhmMzEyNzA2OTAwZGQwYWEyNTFjZWZkODcxMGMKIAiBiIzq1Kju7mEQ5OOZrwYY5B8gDDCs-viOBjgBQOsHEAMaBm1hbGl2YSIgMzhlYjVlMGIxZTgxOTFiMzczMDA4M2VkYTUxMGJlZDk; ssid_ucp_sso_v1=1.0.0-KDVhNWQ5NzZkYjI3YjhmMzEyNzA2OTAwZGQwYWEyNTFjZWZkODcxMGMKIAiBiIzq1Kju7mEQ5OOZrwYY5B8gDDCs-viOBjgBQOsHEAMaBm1hbGl2YSIgMzhlYjVlMGIxZTgxOTFiMzczMDA4M2VkYTUxMGJlZDk; sid_guard=13a4c5e3260b79adf35e9a3aa500a2ac%7C1709601252%7C864000%7CFri%2C+15-Mar-2024+01%3A14%3A12+GMT; uid_tt=ade44bc3d56f046a2c5481cf3b6b16d956d905c53156496e7c490c35db054b43; uid_tt_ss=ade44bc3d56f046a2c5481cf3b6b16d956d905c53156496e7c490c35db054b43; sid_tt=13a4c5e3260b79adf35e9a3aa500a2ac; sessionid=13a4c5e3260b79adf35e9a3aa500a2ac; sessionid_ss=13a4c5e3260b79adf35e9a3aa500a2ac; sid_ucp_v1=1.0.0-KGM0ZTg2NTViZjQ1OWQ2ZjFkMWUyZjFjNzMwMmFkZWNlMmU2NGRjN2EKGgiBiIzq1Kju7mEQ5OOZrwYY5B8gDDgBQOsHEAMaA215MiIgMTNhNGM1ZTMyNjBiNzlhZGYzNWU5YTNhYTUwMGEyYWM; ssid_ucp_v1=1.0.0-KGM0ZTg2NTViZjQ1OWQ2ZjFkMWUyZjFjNzMwMmFkZWNlMmU2NGRjN2EKGgiBiIzq1Kju7mEQ5OOZrwYY5B8gDDgBQOsHEAMaA215MiIgMTNhNGM1ZTMyNjBiNzlhZGYzNWU5YTNhYTUwMGEyYWM; _ga_W44EJN0C49=GS1.1.1708395137.1.0.1708395137.0.0.0; _ga=GA1.1.1665946585.1708395137; msToken=ihVBLGVDP34D19uDBkVaFweNLm7y_UYqHdaJdRM177QSwoO4FoklHF2Ef0bKLNBriKCYpUgPrii7QYkKqChfkmiVcPTiYWa_MRL0uCB83FSONNd3Zm8FLQ==; gf_canary_88990=35; i18next=id-ID; s_v_web_id=verify_ltdofuk9_Nt9eWomF_IdjF_4Lsn_Aibh_pc23tXrkAcEV; csrf_session_id=582b0030ca50c25a35693b64be6f0f77; gf_part_1237467=32; gf_part_1237470=80; user_oec_info=0a5361483b94d53fa67c00c8ad0169d269840ed5731bd04bda01404facb78732f8a814cab913e788b2216a19d7a25ea9dd03f86458ca10334ed49497d0e26621538999f31756260fe549575907bb3d829a41b8656c1a490a3ca2f06bad63cdf07f61c96c18be31720199b8bb6361ca100f3ed94c4ee454bcc9dc2df97cf6ad19e4388ecefcde8cba00f000c6f9dab916deae91021410f3c4cb0d1886d2f6f20d22010426207397; gf_part_1243002=58; gf_part_1246674=94; gf_part_1250401=50; gf_part_1250506=42; lang_type=id; gf_part_1275029=43; gf_part_1290770=80; gf_part_1291063=15; gf_part_1296999=39; gf_part_1305805=21; gf_part_1327625=88; gd_random_1333213=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAzMTE1NjcsImlhdCI6MTcwOTcwNjc2NywibWF0Y2giOnRydWUsIm5iZiI6MTcwOTcwNjc2NywicGF0aCI6Ii8iLCJwZXJjZW50IjowLjMyMTg2MTI3NTk4OTE3ODl9.5K6ZMFjSW819vq6-1O0rEXXcUQ1QeJbzl3XYWGK9wnE; msToken=f_kcPKU4dk_cmiL-nFUgC_LIuvLmZLU8dDhUBtH35SC2vAM195Di6hEtzIKx5sjirY-oKVFx3-wd_x5KhSh1Ra-IYtRZKHP0EEPoQ8tzvU8eirs0Is0C'
                    }
                }
            ],
        };

        const responsesByStore = {};

        for (const store in requestsByStore) {
            const responses = await Promise.all(requestsByStore[store].map(async (item) => {
                try {
                    const response = await axios.get(item.url, { headers: item.headers });
                    return response.data;
                } catch (error) {
                    console.error(`Error fetching data for store ${store}: ${error.message}`);
                    return { error: error.message };
                }
            }));

            responsesByStore[store] = responses;
        }

        // Code untuk pemrosesan data dan respons di sini

        res.json(responsesByStore);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});