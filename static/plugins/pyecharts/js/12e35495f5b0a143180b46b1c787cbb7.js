(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('长葛市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411082","properties":{"name":"长葛市","cp":[113.813714,34.19592],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@BAE@@@A@@C@@G@@AA@@AC@EA@C@@C@@AKBA@@@ABA@@@@DG@GDA@A@@@EA@@C@@@@CA@Q@@CC@G@@BC@@BA@@AA@@BB@@B@BAB@@C@@DC@@@AAC@@AC@@BA@G@@DC@@BC@@CA@@@@C@C@@C@A@C@@CA@@@@A@@A@@BA@@AM@@BA@@@C@@A@CKB@CMB@A@@ABA@C@@@@@@AA@C@CB@AEBAA@AABAA@@AB@@A@@@@BAA@@B@@AAA@CCB@A@@AC@@@AA@@A@I@@@AA@E@BBGBBBK@@BC@@BA@C@BBA@A@@@@B@BBBKB@@DDA@BD@BA@ACCBBDC@EB@DGB@@BB@B@BA@@B@@@@@@AB@BBB@BA@@B@@A@@BA@@BABB@BA@@BB@AB@@@@@D@@@BBAB@@BB@B@@B@@@B@BHBHDJBFEDGBA@QD@@@BBB@@@BA@GBC@@BA@A@@@AA@@@@CBABABCB@BBDCBA@GB@@@B@@A@@@ABA@ABA@AB@@A@@@@BA@B@@B@BC@@BA@A@A@@@AA@@A@GBA@@@AA@@A@@@ABA@@@BBA@@BEBGBABA@@@@BBB@@C@@@@@@AA@@@@@@@@B@B@@@@A@A@@@@BAD@@@BC@A@@@@B@DB@@@@@B@@@BB@@@BA@@BAB@@BBA@@BA@EB@@AB@@CDA@DDBB@@B@@@@BBB@@@@@@B@@@BA@@DB@@@@AA@@@@BA@@BB@@BBBA@@B@@@@BB@@@BA@@@BBA@@@@BA@@BB@@@@@BB@BB@BBDBBAB@BB@@B@@BB@@@B@@@@@@@@@B@@A@AB@@BB@@@B@@A@@B@BBBBDBD@BB@@@@AB@B@@@B@@@BBB@@B@@B@DBBBDB@A@@B@@@@B@@B@ACB@@@@@B@@D@@B@@@BA@@@A@A@@@@@@B@BA@A@@@@D@B@@@BBB@@@B@@AB@@@@DB@@@BB@@B@@@B@@B@@@D@@@B@@B@@@BA@@D@B@@@B@B@@@BB@@B@D@BBBBDD@@@D@BB@@BBBB@@@BABAB@@A@@BB@@D@@@BA@@B@@C@@@AB@@AD@@@B@BAD@BAD@B@@@DBF@DB@@@@@B@@@@B@@BB@@DF@@FBAB@ABB@@@J@@A@@@BB@BA@@@AD@@AB@@ABAF@@C@@@@@AB@@@@@B@@@A@@B@@B@@B@@ABCB@BF@@A@A@AF@@AD@@@B@@DB@B@@H@@B@BBBB@@ADA@A@C@A@@@@B@BA@BB@@@@@@@@D@@D@@@BB@@AL@@@D@@@D@@AB@@BDA@D@B@@@DC@@BD@@B@@@D@BC@@BFBD@@FF@@BD@@@D@@@D@@CF@@B@@CB@D@@A@@D@@B@@@D@@BFBF@@BC@@D@B@@@B@BE@B@H@@BA@BBFA@@D@@BHB@C@AD@@CLB@AB@@AH@@@B@B@@AB@D@@BD@@@B@@CB@D@@DD@N@B@AF@@H@@BF@@BB@@BD@@DB@FB@@D@@@BF@B@B@BA@@BAB@DB@@@@BBB@CDBB@@B@BB@J@@BF@@B@@@ABA@BF@@BD@@@@AH@AC@AD@@AB@@A@A@A@@B@B@@AD@@@@@@AD@@@@B@@BBB@AABA@BDA@@B@@A@@@BBA@@B@@BBA@@B@@AB@@AD@F@@@D@@@B@@AD@@DB@B@@@BB@@B@@@B@@A@@@A@@@CA@@AD@DA@F@B@@@@@D@@BCB@AB@BB@@@B@@AN@@BD@B@@@@@B@@BBD@@FA@@B@B@B@D@@BB@B@L@D@@CD@@@B@@@@@@@B@@BD@BB@@FA@@@@AEF@@A@@AAAGB@B@@A@@DAF@@ECIAIFAAC@@DA@EB@BB@@B@@G@@AEB@@FDAB@@CB@D@@DB@B@BB@@BJD@@BD@H@@AB@@BD@@BB@@E@@AED@@ED@@@@@AB@B@@@BBBBBDB@BBB@DD@@H@@B@DAFC@@@@@A@@AE@A@@B@D@B@DAB@AI@EH@@B@@BHB@BD@@D@FCFAFA@C@@@@ABA@@CB@B@AGJAAA@A@A@@BA@@BA@BB@BBBBB@B@B@B@BABA@@@GBA@ABAB@@AB@@DD@@B@@BBDAD@ACH@B@B@B@BABA@A@@B@AA@A@@EA@@AC@A@@@C@@@@F@@CD@AEDB@@B@@@@CLB@@@C@A@A@C@@@ABABABAFCB@@@BA@@BA@AAC@A@@@@BAB@B@DBBBB@B@DAB@BA@@D@D@B@B@FA@AB@BAF@D@BAFB@@D@H@B@@@BB@B@B@DABAD@@@BB@@BB@@@JAB@DAB@BAFA@@B@BBBB@@DF@BBBB@@@B@DE@A@ABA@A@CD@@ADA@@B@@DB@@DD@@DD@@HB@B@FAB@B@B@@A@@@@@ACA@AAA@@@AB@B@FADBB@D@@@B@@@BA@ABA@A@@@AFC@@@@A@@@A@@CA@@CD@@BB@@@BABA@@BAF@AG@@A@A@A@A@@@A@AAB@@@AAA@@A@@BABADAB@B@BAB@BABE@@BA@@@AA@@@CAAA@@@A@@DA@A@A@A@C@@BA@@B@B@B@@DB@B@@@D@@A@@@@D@BAB@BA@@BA@AD@@@B@@@@CB@BA@@DB@CB@@BBABCC@@AA@@G@@FAB@@GB@@ABAD@@CB@F@@@BAA@@A@C@A@@CAA@CAACAAAAAA@CAC@@@C@A@@@@AAA@CAA@A@C@G@GBA@@@@D@D@BBBM@ACOBBD@@O@@A@AAAC@AAC@@E@AFCB@@AAKAC@A@AA@A@@BC@C@ACCBE@@@A@@AGB@A@@@@A@@@@BC@AB@@CBCB@BEB@@AB@AC@@A@@BEE@C@@D@BC@BHA@@BBF@D@F@@@@@B@B@@G@E@@A@AA@@EE@@CCB@AIBA@E@@J@HI@AA@@I@@F@@E@AB@@G@@B@@B@@B@@A@@DA@G@@@EB@B@@C@@BA@@@A@@@A@@AA@AA@@AB@@A@A@AA@@A@A@@@A@@CA@C@E@@@E@E@@ABCA@@AA@@@K@@CC@A@@DA@K@@AA@@BG@@AI@@CA@@BA@@AK@@CA@A@@A@AB@@@@@@A@@@A@AA@@@@@@CE@BC@A@@I@A@A@@@CA@AE@@@A@E@C@A@@@@D@@@@A@@BBBAB@@@B@@A@@B@@BB@@@@@BC@@D@B@@ID@@@B@BB@FA@@@HF@@@H@D@@FB@@@@D@@@@@D@@C@@@@HA@@CC@C@@@A@@@C@@A@@@AA@@B@@A@@B@BB@@DA@@@ABC@@EE@AA@@@AAAAE@@@C@@@@@AC@ABAA@B@BC@A@@BA@AAED@BA@G@@@C@@CI@@AE@@@C@@CB@@CD@@G@@@@@CCA@@@AA@A@@CA@@AA@@@@@G@@@C@@BE@@F@FG@@FA@A@@@@HA@@BM@@@@EC@@@C@@AC@@AE@@AA@@AC@@@E@@D@@@@I@@EA@CB@B@@E@@ABAI@@@A@AAC@EA@BC@@AC@@@A@A@A@ABA@BAC@"],"encodeOffsets":[[116542,34987]]}}],"UTF8Encoding":true});}));