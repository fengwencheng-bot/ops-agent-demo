const AGENT_SVG12 = '<svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M10 2l1.5 4.5L16 8l-4.5 1.5L10 14l-1.5-4.5L4 8l4.5-1.5z"/><path d="M18 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" opacity=".8"/><path d="M6 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" opacity=".5"/></svg>';
const AGENT_SVG = AGENT_SVG12;
const SVG_EDIT = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8C8C8C" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
const SVG_LIKE = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>';
const SVG_DISLIKE = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z"/><path d="M17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"/></svg>';
const SVG_COPY = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';

const TASKS = {
  update_table: { code: 'di_scheduler.studio_6801187', type: 'Spark SQL', priority: 'P3', owner: 'bryann.yeapkk@shopee.com', workflow: 'workflow_order_pipeline' },
  sync_user_data: { code: 'di_scheduler.studio_8050119', type: 'Spark SQL', priority: 'P5', owner: 'data.team@shopee.com', workflow: 'workflow_user_sync' },
  dwd_payment_detail: { code: 'di_scheduler.studio_3301987', type: 'Spark SQL', priority: 'P5', owner: 'payment.team@shopee.com', workflow: '' },
  ods_raw_order_data: { code: 'di_scheduler.studio_4501234', type: 'Spark SQL', priority: 'P5', owner: 'data.team@shopee.com', workflow: '' },
  dim_user_info: { code: 'di_scheduler.studio_2106534', type: 'Spark SQL', priority: 'P3', owner: 'data.team@shopee.com', workflow: '' },
  ods_product_catalog: { code: 'di_scheduler.studio_1908742', type: 'Spark SQL', priority: 'P3', owner: 'data.team@shopee.com', workflow: '' },
  dws_order_summary_daily: { code: 'di_scheduler.studio_5512380', type: 'Spark SQL', priority: 'P3', owner: 'wu.chen@shopee.com', workflow: '' },
  ads_order_report: { code: 'di_scheduler.studio_6678901', type: 'Spark SQL', priority: 'P3', owner: 'wu.chen@shopee.com', workflow: '' },
  etl_data_warehouse: { code: 'di_scheduler.studio_7700001', type: 'Spark SQL', priority: 'P5', owner: 'dw.team@shopee.com', workflow: 'workflow_dw_master' },
  ods_click_stream: { code: 'di_scheduler.studio_7700002', type: 'Spark SQL', priority: 'P3', owner: 'data.team@shopee.com', workflow: '' },
  ods_ad_impression: { code: 'di_scheduler.studio_7700003', type: 'Spark SQL', priority: 'P3', owner: 'ads.team@shopee.com', workflow: '' },
  ods_search_log: { code: 'di_scheduler.studio_7700004', type: 'Spark SQL', priority: 'P3', owner: 'search.team@shopee.com', workflow: '' },
  dim_product_attr: { code: 'di_scheduler.studio_7700005', type: 'Spark SQL', priority: 'P3', owner: 'data.team@shopee.com', workflow: '' },
  dim_geo_region: { code: 'di_scheduler.studio_7700006', type: 'Spark SQL', priority: 'P2', owner: 'data.team@shopee.com', workflow: '' },
  dim_channel_info: { code: 'di_scheduler.studio_7700007', type: 'Spark SQL', priority: 'P3', owner: 'data.team@shopee.com', workflow: '' },
  ods_refund_event: { code: 'di_scheduler.studio_7700008', type: 'Spark SQL', priority: 'P3', owner: 'finance.team@shopee.com', workflow: '' },
  ods_coupon_usage: { code: 'di_scheduler.studio_7700009', type: 'Spark SQL', priority: 'P3', owner: 'marketing.team@shopee.com', workflow: '' },
  ods_logistics_track: { code: 'di_scheduler.studio_7700010', type: 'Spark SQL', priority: 'P4', owner: 'logistics.team@shopee.com', workflow: '' },
  ods_inventory_snapshot: { code: 'di_scheduler.studio_7700011', type: 'Spark SQL', priority: 'P3', owner: 'supply.team@shopee.com', workflow: '' },
  ads_user_retention: { code: 'di_scheduler.studio_7700012', type: 'Spark SQL', priority: 'P4', owner: 'analytics.team@shopee.com', workflow: '' },
  ads_funnel_analysis: { code: 'di_scheduler.studio_7700013', type: 'Spark SQL', priority: 'P3', owner: 'analytics.team@shopee.com', workflow: '' },
  ads_revenue_dashboard: { code: 'di_scheduler.studio_7700014', type: 'Spark SQL', priority: 'P5', owner: 'finance.team@shopee.com', workflow: '' },
  ads_cohort_weekly: { code: 'di_scheduler.studio_7700015', type: 'Spark SQL', priority: 'P3', owner: 'analytics.team@shopee.com', workflow: '' },
  ads_churn_prediction: { code: 'di_scheduler.studio_7700016', type: 'Spark SQL', priority: 'P3', owner: 'ml.team@shopee.com', workflow: '' },
  ads_ab_test_result: { code: 'di_scheduler.studio_7700017', type: 'Spark SQL', priority: 'P3', owner: 'experiment.team@shopee.com', workflow: '' },
  ads_category_ranking: { code: 'di_scheduler.studio_7700018', type: 'Spark SQL', priority: 'P3', owner: 'analytics.team@shopee.com', workflow: '' },
  ads_merchant_score: { code: 'di_scheduler.studio_7700019', type: 'Spark SQL', priority: 'P4', owner: 'merchant.team@shopee.com', workflow: '' },
  ads_search_quality: { code: 'di_scheduler.studio_7700020', type: 'Spark SQL', priority: 'P3', owner: 'search.team@shopee.com', workflow: '' },
  ads_realtime_monitor: { code: 'di_scheduler.studio_7700021', type: 'Spark SQL', priority: 'P5', owner: 'sre.team@shopee.com', workflow: '' }
};

const INSTANCES = {
  'di_scheduler.studio_6801187_20260403_DAY_1': { task: 'update_table', status: 'Successful', note: '' },
  'di_scheduler.studio_6801187_20260403_DAY_2': { task: 'update_table', status: 'Failed', note: 'OOM at 07:18' },
  'di_scheduler.studio_8050119_20260403_DAY_1': { task: 'sync_user_data', status: 'Running', note: 'slow, +45min' },
  'di_scheduler.studio_3301987_20260403_DAY_1': { task: 'dwd_payment_detail', status: 'Waiting', note: 'upstream blocked >2h' },
  'di_scheduler.studio_4501234_20260403_DAY_1': { task: 'ods_raw_order_data', status: 'Successful', note: '' },
  'di_scheduler.studio_2106534_20260403_DAY_1': { task: 'dim_user_info', status: 'Successful', note: '' },
  'di_scheduler.studio_1908742_20260403_DAY_1': { task: 'ods_product_catalog', status: 'Successful', note: '' },
  'di_scheduler.studio_5512380_20260403_DAY_1': { task: 'dws_order_summary_daily', status: 'Waiting', note: 'upstream failed' },
  'di_scheduler.studio_6678901_20260403_DAY_1': { task: 'ads_order_report', status: 'Successful', note: '' },
  'di_scheduler.studio_7700001_20260403_DAY_1': { task: 'etl_data_warehouse', status: 'Running', note: 'running 95min, avg 40min' },
  'di_scheduler.studio_7700002_20260403_DAY_1': { task: 'ods_click_stream', status: 'Successful', note: '' },
  'di_scheduler.studio_7700003_20260403_DAY_1': { task: 'ods_ad_impression', status: 'Successful', note: '' },
  'di_scheduler.studio_7700004_20260403_DAY_1': { task: 'ods_search_log', status: 'Successful', note: '' },
  'di_scheduler.studio_7700005_20260403_DAY_1': { task: 'dim_product_attr', status: 'Successful', note: '' },
  'di_scheduler.studio_7700006_20260403_DAY_1': { task: 'dim_geo_region', status: 'Successful', note: '' },
  'di_scheduler.studio_7700007_20260403_DAY_1': { task: 'dim_channel_info', status: 'Successful', note: '' },
  'di_scheduler.studio_7700008_20260403_DAY_1': { task: 'ods_refund_event', status: 'Failed', note: 'schema mismatch' },
  'di_scheduler.studio_7700009_20260403_DAY_1': { task: 'ods_coupon_usage', status: 'Successful', note: '' },
  'di_scheduler.studio_7700010_20260403_DAY_1': { task: 'ods_logistics_track', status: 'Running', note: 'slow +20min' },
  'di_scheduler.studio_7700011_20260403_DAY_1': { task: 'ods_inventory_snapshot', status: 'Successful', note: '' },
  'di_scheduler.studio_7700012_20260403_DAY_1': { task: 'ads_user_retention', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700013_20260403_DAY_1': { task: 'ads_funnel_analysis', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700014_20260403_DAY_1': { task: 'ads_revenue_dashboard', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700015_20260403_DAY_1': { task: 'ads_cohort_weekly', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700016_20260403_DAY_1': { task: 'ads_churn_prediction', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700017_20260403_DAY_1': { task: 'ads_ab_test_result', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700018_20260403_DAY_1': { task: 'ads_category_ranking', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700019_20260403_DAY_1': { task: 'ads_merchant_score', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700020_20260403_DAY_1': { task: 'ads_search_quality', status: 'Waiting', note: 'upstream pending' },
  'di_scheduler.studio_7700021_20260403_DAY_1': { task: 'ads_realtime_monitor', status: 'Waiting', note: 'upstream pending' }
};

const TASK_CODES = {
  update_table: '<div><span class="cm">-- update_table: Daily order data aggregation</span></div><div><span class="cm">-- Owner: bryann.yeapkk@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dwd.order_detail</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    o.order_id,</div><div>    o.user_id,</div><div>    p.product_name,</div><div>    p.category,</div><div>    o.amount,</div><div>    o.currency,</div><div>    u.country,</div><div>    u.register_date,</div><div class="code-line-hl">    <span class="fn">COLLECT_LIST</span>(<span class="kw">STRUCT</span>(o.item_id, o.quantity, o.unit_price)) <span class="kw">AS</span> items,  <span class="cm">-- Data skew risk</span></div><div>    o.create_time,</div><div>    o.update_time</div><div><span class="kw">FROM</span> ods.raw_order_data o</div><div class="code-line-hl"><span class="kw">JOIN</span> ods.product_catalog p <span class="kw">ON</span> o.product_id = p.product_id  <span class="cm">-- Full JOIN, table p is 2.8GB</span></div><div><span class="kw">JOIN</span> dim.user_info u <span class="kw">ON</span> o.user_id = u.user_id</div><div><span class="kw">WHERE</span> o.dt = <span class="str">\'${bizdate}\'</span></div><div>  <span class="kw">AND</span> o.status <span class="kw">IN</span> (<span class="str">\'COMPLETED\'</span>, <span class="str">\'REFUNDED\'</span>)</div><div><span class="kw">DISTRIBUTE BY</span> o.user_id</div>',
  sync_user_data: '<div><span class="cm">-- sync_user_data: Incremental user profile sync</span></div><div><span class="cm">-- Owner: data.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dim.user_info</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    u.user_id,</div><div>    u.username,</div><div>    u.email,</div><div>    u.country,</div><div>    u.register_date,</div><div>    u.last_login,</div><div>    u.vip_level,</div><div>    <span class="fn">COALESCE</span>(a.total_orders, <span class="num">0</span>) <span class="kw">AS</span> total_orders</div><div><span class="kw">FROM</span> ods.user_profile u</div><div><span class="kw">LEFT JOIN</span> (</div><div>    <span class="kw">SELECT</span> user_id, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> total_orders</div><div>    <span class="kw">FROM</span> ods.raw_order_data</div><div>    <span class="kw">WHERE</span> dt >= <span class="fn">date_sub</span>(<span class="str">\'${bizdate}\'</span>, <span class="num">30</span>)</div><div>    <span class="kw">GROUP BY</span> user_id</div><div>) a <span class="kw">ON</span> u.user_id = a.user_id</div><div><span class="kw">WHERE</span> u.dt = <span class="str">\'${bizdate}\'</span></div>',
  dwd_payment_detail: '<div><span class="cm">-- dwd_payment_detail: Payment detail wide table</span></div><div><span class="cm">-- Owner: payment.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dwd.payment_detail</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    p.payment_id,</div><div>    p.order_id,</div><div>    p.user_id,</div><div>    u.country,</div><div>    p.payment_method,</div><div>    p.amount,</div><div>    p.currency,</div><div>    p.status,</div><div>    p.create_time</div><div><span class="kw">FROM</span> ods.payment_log p</div><div><span class="kw">JOIN</span> dim.user_info u <span class="kw">ON</span> p.user_id = u.user_id</div><div><span class="kw">WHERE</span> p.dt = <span class="str">\'${bizdate}\'</span></div>',
  dws_order_summary_daily: '<div><span class="cm">-- dws_order_summary_daily: Daily order summary</span></div><div><span class="cm">-- Owner: wu.chen@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dws.order_summary_daily</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    dt,</div><div>    country,</div><div>    category,</div><div>    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> order_id) <span class="kw">AS</span> order_cnt,</div><div>    <span class="fn">SUM</span>(amount) <span class="kw">AS</span> total_amount,</div><div>    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> user_id) <span class="kw">AS</span> buyer_cnt</div><div><span class="kw">FROM</span> dwd.order_detail</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div><span class="kw">GROUP BY</span> dt, country, category</div>',
  ods_raw_order_data: '<div><span class="cm">-- ods_raw_order_data: Raw order data ingestion</span></div><div><span class="cm">-- Owner: data.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.raw_order_data</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    order_id,</div><div>    user_id,</div><div>    product_id,</div><div>    item_id,</div><div>    quantity,</div><div>    unit_price,</div><div>    amount,</div><div>    currency,</div><div>    status,</div><div>    create_time,</div><div>    update_time</div><div><span class="kw">FROM</span> kafka_source.order_events</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div>  <span class="kw">AND</span> event_type = <span class="str">\'ORDER_CREATED\'</span></div>',
  dim_user_info: '<div><span class="cm">-- dim_user_info: User dimension table</span></div><div><span class="cm">-- Owner: data.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dim.user_info</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    u.user_id,</div><div>    u.username,</div><div>    u.email,</div><div>    u.country,</div><div>    u.register_date,</div><div>    u.last_login,</div><div>    u.vip_level,</div><div>    u.phone_verified,</div><div>    u.email_verified</div><div><span class="kw">FROM</span> ods.user_profile u</div><div><span class="kw">WHERE</span> u.dt = <span class="str">\'${bizdate}\'</span></div><div>  <span class="kw">AND</span> u.is_active = <span class="num">1</span></div>',
  ods_product_catalog: '<div><span class="cm">-- ods_product_catalog: Product catalog sync</span></div><div><span class="cm">-- Owner: data.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.product_catalog</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    product_id,</div><div>    product_name,</div><div>    category,</div><div>    sub_category,</div><div>    brand,</div><div>    price,</div><div>    stock_qty,</div><div>    seller_id,</div><div>    create_time,</div><div>    update_time</div><div><span class="kw">FROM</span> mysql_source.products</div><div><span class="kw">WHERE</span> update_time >= <span class="str">\'${bizdate} 00:00:00\'</span></div>',
  ads_order_report: '<div><span class="cm">-- ads_order_report: Daily order report for BI</span></div><div><span class="cm">-- Owner: wu.chen@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.order_report</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    s.dt,</div><div>    s.country,</div><div>    s.category,</div><div>    s.order_cnt,</div><div>    s.total_amount,</div><div>    s.buyer_cnt,</div><div>    <span class="fn">ROUND</span>(s.total_amount / s.order_cnt, <span class="num">2</span>) <span class="kw">AS</span> avg_order_value,</div><div>    p.refund_cnt,</div><div>    <span class="fn">ROUND</span>(p.refund_cnt / s.order_cnt * <span class="num">100</span>, <span class="num">2</span>) <span class="kw">AS</span> refund_rate</div><div><span class="kw">FROM</span> dws.order_summary_daily s</div><div><span class="kw">LEFT JOIN</span> dwd.payment_detail p</div><div>  <span class="kw">ON</span> s.dt = p.dt <span class="kw">AND</span> s.country = p.country</div><div><span class="kw">WHERE</span> s.dt = <span class="str">\'${bizdate}\'</span></div>',
  etl_data_warehouse: '<div><span class="cm">-- etl_data_warehouse: Master DW orchestration</span></div><div><span class="cm">-- Owner: dw.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dw.master_summary</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    o.order_id, o.user_id, o.amount,</div><div>    p.product_name, p.category,</div><div>    u.country, u.vip_level,</div><div>    c.click_cnt, a.impression_cnt</div><div><span class="kw">FROM</span> dwd.order_detail o</div><div><span class="kw">JOIN</span> dim.user_info u <span class="kw">ON</span> o.user_id = u.user_id</div><div><span class="kw">JOIN</span> dim.product_attr p <span class="kw">ON</span> o.product_id = p.product_id</div><div><span class="kw">LEFT JOIN</span> ods.click_stream c <span class="kw">ON</span> o.user_id = c.user_id</div><div><span class="kw">LEFT JOIN</span> ods.ad_impression a <span class="kw">ON</span> o.user_id = a.user_id</div><div><span class="kw">WHERE</span> o.dt = <span class="str">\'${bizdate}\'</span></div>',
  ods_click_stream: '<div><span class="cm">-- ods_click_stream: Clickstream event ingestion</span></div><div><span class="cm">-- Owner: data.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.click_stream</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    event_id, user_id, session_id,</div><div>    page_url, referrer, action_type,</div><div>    device_type, os, browser,</div><div>    event_time</div><div><span class="kw">FROM</span> kafka_source.click_events</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div>',
  ods_ad_impression: '<div><span class="cm">-- ods_ad_impression: Ad impression log ingestion</span></div><div><span class="cm">-- Owner: ads.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.ad_impression</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    impression_id, ad_id, user_id,</div><div>    placement, bid_price, win_price,</div><div>    is_clicked, event_time</div><div><span class="kw">FROM</span> kafka_source.ad_events</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span> <span class="kw">AND</span> event_type = <span class="str">\'IMPRESSION\'</span></div>',
  ods_search_log: '<div><span class="cm">-- ods_search_log: Search query log ingestion</span></div><div><span class="cm">-- Owner: search.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.search_log</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    query_id, user_id, query_text,</div><div>    result_count, click_position,</div><div>    latency_ms, event_time</div><div><span class="kw">FROM</span> kafka_source.search_events</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div>',
  dim_product_attr: '<div><span class="cm">-- dim_product_attr: Product attribute dimension</span></div><div><span class="cm">-- Owner: data.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dim.product_attr</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    p.product_id, p.product_name, p.category,</div><div>    p.sub_category, p.brand, p.price,</div><div>    p.seller_id, p.rating, p.review_cnt</div><div><span class="kw">FROM</span> ods.product_catalog p</div><div><span class="kw">WHERE</span> p.dt = <span class="str">\'${bizdate}\'</span></div>',
  dim_geo_region: '<div><span class="cm">-- dim_geo_region: Geographic region dimension</span></div><div><span class="cm">-- Owner: data.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dim.geo_region</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    region_id, country, state, city,</div><div>    timezone, currency_code</div><div><span class="kw">FROM</span> mysql_source.geo_regions</div><div><span class="kw">WHERE</span> is_active = <span class="num">1</span></div>',
  dim_channel_info: '<div><span class="cm">-- dim_channel_info: Marketing channel dimension</span></div><div><span class="cm">-- Owner: data.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> dim.channel_info</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    channel_id, channel_name, channel_type,</div><div>    parent_channel, cost_model, is_active</div><div><span class="kw">FROM</span> mysql_source.marketing_channels</div><div><span class="kw">WHERE</span> is_active = <span class="num">1</span></div>',
  ods_refund_event: '<div><span class="cm">-- ods_refund_event: Refund event ingestion</span></div><div><span class="cm">-- Owner: finance.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.refund_event</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    refund_id, order_id, user_id,</div><div>    refund_amount, refund_reason,</div><div>    status, create_time</div><div><span class="kw">FROM</span> kafka_source.refund_events</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div>',
  ods_coupon_usage: '<div><span class="cm">-- ods_coupon_usage: Coupon usage tracking</span></div><div><span class="cm">-- Owner: marketing.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.coupon_usage</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    coupon_id, user_id, order_id,</div><div>    discount_amount, coupon_type,</div><div>    used_time</div><div><span class="kw">FROM</span> kafka_source.coupon_events</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span> <span class="kw">AND</span> action = <span class="str">\'USED\'</span></div>',
  ods_logistics_track: '<div><span class="cm">-- ods_logistics_track: Logistics tracking ingestion</span></div><div><span class="cm">-- Owner: logistics.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.logistics_track</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    tracking_id, order_id, carrier,</div><div>    status, location, event_time</div><div><span class="kw">FROM</span> api_source.logistics_api</div><div><span class="kw">WHERE</span> event_date = <span class="str">\'${bizdate}\'</span></div>',
  ods_inventory_snapshot: '<div><span class="cm">-- ods_inventory_snapshot: Daily inventory snapshot</span></div><div><span class="cm">-- Owner: supply.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ods.inventory_snapshot</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    warehouse_id, product_id,</div><div>    stock_qty, reserved_qty,</div><div>    available_qty, snapshot_time</div><div><span class="kw">FROM</span> mysql_source.inventory</div>',
  ads_user_retention: '<div><span class="cm">-- ads_user_retention: User retention cohort analysis</span></div><div><span class="cm">-- Owner: analytics.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.user_retention</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    cohort_date, retention_day,</div><div>    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> user_id) <span class="kw">AS</span> retained_users,</div><div>    cohort_size,</div><div>    <span class="fn">ROUND</span>(<span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> user_id) / cohort_size * <span class="num">100</span>, <span class="num">2</span>) <span class="kw">AS</span> retention_rate</div><div><span class="kw">FROM</span> dw.user_activity_daily</div><div><span class="kw">GROUP BY</span> cohort_date, retention_day, cohort_size</div>',
  ads_funnel_analysis: '<div><span class="cm">-- ads_funnel_analysis: Conversion funnel metrics</span></div><div><span class="cm">-- Owner: analytics.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.funnel_analysis</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    funnel_step, step_name,</div><div>    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> session_id) <span class="kw">AS</span> sessions,</div><div>    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> user_id) <span class="kw">AS</span> users</div><div><span class="kw">FROM</span> dw.session_events</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div><span class="kw">GROUP BY</span> funnel_step, step_name</div>',
  ads_revenue_dashboard: '<div><span class="cm">-- ads_revenue_dashboard: Revenue dashboard metrics</span></div><div><span class="cm">-- Owner: finance.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.revenue_dashboard</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    country, category,</div><div>    <span class="fn">SUM</span>(amount) <span class="kw">AS</span> gross_revenue,</div><div>    <span class="fn">SUM</span>(refund_amount) <span class="kw">AS</span> total_refunds,</div><div>    <span class="fn">SUM</span>(amount) - <span class="fn">SUM</span>(refund_amount) <span class="kw">AS</span> net_revenue</div><div><span class="kw">FROM</span> dw.master_summary</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div><span class="kw">GROUP BY</span> country, category</div>',
  ads_cohort_weekly: '<div><span class="cm">-- ads_cohort_weekly: Weekly cohort analysis</span></div><div><span class="cm">-- Owner: analytics.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.cohort_weekly</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    cohort_week, week_offset,</div><div>    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> user_id) <span class="kw">AS</span> active_users,</div><div>    <span class="fn">SUM</span>(order_cnt) <span class="kw">AS</span> total_orders</div><div><span class="kw">FROM</span> dw.user_weekly_agg</div><div><span class="kw">GROUP BY</span> cohort_week, week_offset</div>',
  ads_churn_prediction: '<div><span class="cm">-- ads_churn_prediction: Churn prediction features</span></div><div><span class="cm">-- Owner: ml.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.churn_prediction</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    user_id,</div><div>    days_since_last_order,</div><div>    order_frequency_30d,</div><div>    avg_order_value_30d,</div><div>    churn_score</div><div><span class="kw">FROM</span> ml.churn_model_output</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div>',
  ads_ab_test_result: '<div><span class="cm">-- ads_ab_test_result: A/B test result aggregation</span></div><div><span class="cm">-- Owner: experiment.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.ab_test_result</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    experiment_id, variant,</div><div>    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> user_id) <span class="kw">AS</span> users,</div><div>    <span class="fn">SUM</span>(conversion) <span class="kw">AS</span> conversions,</div><div>    <span class="fn">AVG</span>(metric_value) <span class="kw">AS</span> avg_metric</div><div><span class="kw">FROM</span> dw.experiment_events</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div><span class="kw">GROUP BY</span> experiment_id, variant</div>',
  ads_category_ranking: '<div><span class="cm">-- ads_category_ranking: Category ranking metrics</span></div><div><span class="cm">-- Owner: analytics.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.category_ranking</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    category,</div><div>    <span class="fn">SUM</span>(order_cnt) <span class="kw">AS</span> total_orders,</div><div>    <span class="fn">SUM</span>(total_amount) <span class="kw">AS</span> gmv,</div><div>    <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> <span class="fn">SUM</span>(total_amount) <span class="kw">DESC</span>) <span class="kw">AS</span> gmv_rank</div><div><span class="kw">FROM</span> dws.order_summary_daily</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div><span class="kw">GROUP BY</span> category</div>',
  ads_merchant_score: '<div><span class="cm">-- ads_merchant_score: Merchant performance scoring</span></div><div><span class="cm">-- Owner: merchant.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.merchant_score</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    seller_id,</div><div>    <span class="fn">AVG</span>(rating) <span class="kw">AS</span> avg_rating,</div><div>    <span class="fn">SUM</span>(order_cnt) <span class="kw">AS</span> total_orders,</div><div>    refund_rate, delivery_score,</div><div>    overall_score</div><div><span class="kw">FROM</span> dw.merchant_metrics</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div><span class="kw">GROUP BY</span> seller_id, refund_rate, delivery_score, overall_score</div>',
  ads_search_quality: '<div><span class="cm">-- ads_search_quality: Search quality metrics</span></div><div><span class="cm">-- Owner: search.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.search_quality</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    query_category,</div><div>    <span class="fn">AVG</span>(click_position) <span class="kw">AS</span> avg_click_pos,</div><div>    <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> query_id) <span class="kw">AS</span> queries,</div><div>    <span class="fn">SUM</span>(<span class="kw">CASE WHEN</span> click_position > <span class="num">0</span> <span class="kw">THEN</span> <span class="num">1</span> <span class="kw">ELSE</span> <span class="num">0</span> <span class="kw">END</span>) / <span class="fn">COUNT</span>(*) <span class="kw">AS</span> ctr</div><div><span class="kw">FROM</span> ods.search_log</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div><span class="kw">GROUP BY</span> query_category</div>',
  ads_realtime_monitor: '<div><span class="cm">-- ads_realtime_monitor: Real-time monitoring aggregation</span></div><div><span class="cm">-- Owner: sre.team@shopee.com</span></div><div>&nbsp;</div><div><span class="kw">INSERT OVERWRITE TABLE</span> ads.realtime_monitor</div><div><span class="kw">PARTITION</span> (dt = <span class="str">\'${bizdate}\'</span>)</div><div><span class="kw">SELECT</span></div><div>    metric_name, service_name,</div><div>    <span class="fn">AVG</span>(value) <span class="kw">AS</span> avg_val,</div><div>    <span class="fn">MAX</span>(value) <span class="kw">AS</span> max_val,</div><div>    <span class="fn">PERCENTILE</span>(value, <span class="num">0.99</span>) <span class="kw">AS</span> p99</div><div><span class="kw">FROM</span> kafka_source.metrics_stream</div><div><span class="kw">WHERE</span> dt = <span class="str">\'${bizdate}\'</span></div><div><span class="kw">GROUP BY</span> metric_name, service_name</div>'
};

const INSTANCE_LOGS = {
  'di_scheduler.studio_6801187_20260403_DAY_2': [
    { t: '07:01:01', l: 'INFO', m: 'Task update_table started. Instance: inst_6801187_20260403_DAY_2' },
    { t: '07:01:02', l: 'INFO', m: 'Submitting Spark application to queue: prod_default' },
    { t: '07:01:05', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_28451' },
    { t: '07:01:08', l: 'INFO', m: 'Spark application running. Allocated 4 executors (8GB each).' },
    { t: '07:03:22', l: 'INFO', m: 'Stage 1/3 completed. 2048 tasks processed.' },
    { t: '07:06:45', l: 'INFO', m: 'Stage 2/3 running. Shuffle read: 12.4 GB' },
    { t: '07:10:11', l: 'WARN', m: 'Executor 2: GC overhead limit exceeded. GC time: 98%' },
    { t: '07:12:33', l: 'ERROR', m: 'Executor 2 lost: Container killed by YARN for exceeding memory limits. 8.1 GB of 8 GB physical memory used.', hl: true },
    { t: '07:12:34', l: 'INFO', m: 'Retrying task 1842 on executor 5...' },
    { t: '07:15:08', l: 'WARN', m: 'Executor 5: Shuffle spill to disk: 3.2 GB' },
    { t: '07:18:47', l: 'ERROR', m: 'org.apache.spark.SparkException: Job aborted due to stage failure: Task 1842 in stage 2.0 failed 4 times.', hl: true },
    { t: '07:18:47', l: 'ERROR', m: 'Caused by: java.lang.OutOfMemoryError: Java heap space', hl: true },
    { t: '07:18:48', l: 'ERROR', m: 'Task failed after 4 retries. Marking instance as FAILED.', hl: true },
    { t: '07:18:48', l: 'INFO', m: 'Total duration: 17min 47s. Exit code: 1' }
  ],
  'di_scheduler.studio_6801187_20260403_DAY_1': [
    { t: '03:00:01', l: 'INFO', m: 'Task update_table started. Instance: inst_6801187_20260403_DAY_1' },
    { t: '03:00:02', l: 'INFO', m: 'Submitting Spark application to queue: prod_default' },
    { t: '03:00:05', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_27832' },
    { t: '03:12:34', l: 'INFO', m: 'All 3 stages completed successfully.' },
    { t: '03:12:35', l: 'INFO', m: 'Total duration: 12min 34s. Exit code: 0' }
  ],
  'di_scheduler.studio_8050119_20260403_DAY_1': [
    { t: '05:00:01', l: 'INFO', m: 'Task sync_user_data started. Instance: inst_8050119_20260403_DAY_1' },
    { t: '05:00:03', l: 'INFO', m: 'Submitting Spark application to queue: prod_user' },
    { t: '05:00:06', l: 'INFO', m: 'Spark application running. Allocated 6 executors (4GB each).' },
    { t: '05:15:22', l: 'INFO', m: 'Stage 1/2 completed. 512 tasks processed.' },
    { t: '05:32:10', l: 'WARN', m: 'Stage 2/2 running slowly. Shuffle write 7.8 GB (avg 4.2 GB). Possible skew detected.' },
    { t: '06:17:00', l: 'INFO', m: 'Stage 2/2 still running. Elapsed 77min (avg 32min). Waiting for completion...' }
  ],
  'di_scheduler.studio_3301987_20260403_DAY_1': [
    { t: '05:30:00', l: 'INFO', m: 'Task dwd_payment_detail scheduled. Checking upstream dependencies...' },
    { t: '05:30:01', l: 'INFO', m: 'Upstream sync_user_data (inst_8050119_20260403_DAY_1) status: Running' },
    { t: '05:30:01', l: 'WARN', m: 'Upstream not ready. Instance entering WAITING state.' },
    { t: '06:30:01', l: 'INFO', m: 'Recheck upstream: sync_user_data still Running (elapsed 90min).' },
    { t: '07:30:01', l: 'WARN', m: 'Waiting >2h. Upstream sync_user_data still Running.' }
  ],
  'di_scheduler.studio_4501234_20260403_DAY_1': [
    { t: '02:00:01', l: 'INFO', m: 'Task ods_raw_order_data started. Instance: inst_4501234_20260403_DAY_1' },
    { t: '02:00:03', l: 'INFO', m: 'Submitting Spark application to queue: prod_ingestion' },
    { t: '02:00:06', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_26100' },
    { t: '02:00:09', l: 'INFO', m: 'Spark application running. Allocated 3 executors (4GB each).' },
    { t: '02:08:15', l: 'INFO', m: 'Stage 1/1 completed. 256 tasks processed. Shuffle read: 1.8 GB' },
    { t: '02:08:16', l: 'INFO', m: 'Total duration: 8min 15s. Exit code: 0' }
  ],
  'di_scheduler.studio_2106534_20260403_DAY_1': [
    { t: '02:30:01', l: 'INFO', m: 'Task dim_user_info started. Instance: inst_2106534_20260403_DAY_1' },
    { t: '02:30:02', l: 'INFO', m: 'Submitting Spark application to queue: prod_dim' },
    { t: '02:30:05', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_26205' },
    { t: '02:30:08', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '02:35:42', l: 'INFO', m: 'Stage 1/1 completed. 128 tasks processed.' },
    { t: '02:35:43', l: 'INFO', m: 'Total duration: 5min 42s. Exit code: 0' }
  ],
  'di_scheduler.studio_1908742_20260403_DAY_1': [
    { t: '01:00:01', l: 'INFO', m: 'Task ods_product_catalog started. Instance: inst_1908742_20260403_DAY_1' },
    { t: '01:00:02', l: 'INFO', m: 'Submitting Spark application to queue: prod_ingestion' },
    { t: '01:00:04', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_25801' },
    { t: '01:00:07', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '01:06:18', l: 'INFO', m: 'Stage 1/1 completed. 64 tasks processed. Read: 0.9 GB' },
    { t: '01:06:19', l: 'INFO', m: 'Total duration: 6min 18s. Exit code: 0' }
  ],
  'di_scheduler.studio_5512380_20260403_DAY_1': [
    { t: '08:00:00', l: 'INFO', m: 'Task dws_order_summary_daily scheduled. Checking upstream dependencies...' },
    { t: '08:00:01', l: 'INFO', m: 'Upstream update_table (inst_6801187_20260403_DAY_2) status: Failed' },
    { t: '08:00:01', l: 'WARN', m: 'Upstream not ready. Instance entering WAITING state.', hl: true },
    { t: '09:00:01', l: 'INFO', m: 'Recheck upstream: update_table still Failed.' },
    { t: '10:00:01', l: 'WARN', m: 'Waiting >2h. Upstream update_table remains Failed. Manual intervention required.', hl: true }
  ],
  'di_scheduler.studio_6678901_20260403_DAY_1': [
    { t: '04:00:01', l: 'INFO', m: 'Task ads_order_report started. Instance: inst_6678901_20260403_DAY_1' },
    { t: '04:00:03', l: 'INFO', m: 'Submitting Spark application to queue: prod_report' },
    { t: '04:00:06', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_27100' },
    { t: '04:00:09', l: 'INFO', m: 'Spark application running. Allocated 4 executors (4GB each).' },
    { t: '04:12:33', l: 'INFO', m: 'Stage 1/2 completed. 512 tasks processed.' },
    { t: '04:18:45', l: 'INFO', m: 'Stage 2/2 completed. Shuffle read: 3.1 GB' },
    { t: '04:18:46', l: 'INFO', m: 'Total duration: 18min 45s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700001_20260403_DAY_1': [
    { t: '01:00:01', l: 'INFO', m: 'Task etl_data_warehouse started. Instance: inst_7700001_20260403_DAY_1' },
    { t: '01:00:02', l: 'INFO', m: 'Submitting Spark application to queue: prod_dw' },
    { t: '01:00:05', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30001' },
    { t: '01:00:08', l: 'INFO', m: 'Spark application running. Allocated 8 executors (8GB each).' },
    { t: '01:22:15', l: 'INFO', m: 'Stage 1/4 completed. 2048 tasks processed. Shuffle write: 12.5 GB' },
    { t: '01:38:42', l: 'INFO', m: 'Stage 2/4 completed. 1024 tasks processed.' },
    { t: '01:52:10', l: 'WARN', m: 'Stage 3/4 running slowly. GC time 18%. Consider increasing executor memory.', hl: true },
    { t: '02:15:33', l: 'INFO', m: 'Stage 3/4 completed. 2048 tasks. Spill: 4.2 GB' },
    { t: '02:35:00', l: 'INFO', m: 'Stage 4/4 still in progress. 1200/2048 tasks done.' }
  ],
  'di_scheduler.studio_7700002_20260403_DAY_1': [
    { t: '00:30:01', l: 'INFO', m: 'Task ods_click_stream started. Instance: inst_7700002_20260403_DAY_1' },
    { t: '00:30:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30002' },
    { t: '00:30:06', l: 'INFO', m: 'Spark application running. Allocated 4 executors (4GB each).' },
    { t: '00:42:18', l: 'INFO', m: 'Stage 1/1 completed. 512 tasks processed. Read: 8.2 GB' },
    { t: '00:42:19', l: 'INFO', m: 'Total duration: 12min 18s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700003_20260403_DAY_1': [
    { t: '00:30:01', l: 'INFO', m: 'Task ods_ad_impression started. Instance: inst_7700003_20260403_DAY_1' },
    { t: '00:30:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30003' },
    { t: '00:30:06', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '00:38:45', l: 'INFO', m: 'Stage 1/1 completed. 256 tasks processed.' },
    { t: '00:38:46', l: 'INFO', m: 'Total duration: 8min 45s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700004_20260403_DAY_1': [
    { t: '00:30:01', l: 'INFO', m: 'Task ods_search_log started. Instance: inst_7700004_20260403_DAY_1' },
    { t: '00:30:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30004' },
    { t: '00:30:05', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '00:36:22', l: 'INFO', m: 'Stage 1/1 completed. 128 tasks processed.' },
    { t: '00:36:23', l: 'INFO', m: 'Total duration: 6min 22s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700005_20260403_DAY_1': [
    { t: '01:00:01', l: 'INFO', m: 'Task dim_product_attr started. Instance: inst_7700005_20260403_DAY_1' },
    { t: '01:00:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30005' },
    { t: '01:00:05', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '01:05:18', l: 'INFO', m: 'Stage 1/1 completed. 64 tasks processed.' },
    { t: '01:05:19', l: 'INFO', m: 'Total duration: 5min 18s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700006_20260403_DAY_1': [
    { t: '00:15:01', l: 'INFO', m: 'Task dim_geo_region started. Instance: inst_7700006_20260403_DAY_1' },
    { t: '00:15:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30006' },
    { t: '00:15:05', l: 'INFO', m: 'Spark application running. Allocated 1 executor (2GB).' },
    { t: '00:16:42', l: 'INFO', m: 'Stage 1/1 completed. 8 tasks processed.' },
    { t: '00:16:43', l: 'INFO', m: 'Total duration: 1min 42s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700007_20260403_DAY_1': [
    { t: '00:15:01', l: 'INFO', m: 'Task dim_channel_info started. Instance: inst_7700007_20260403_DAY_1' },
    { t: '00:15:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30007' },
    { t: '00:15:05', l: 'INFO', m: 'Spark application running. Allocated 1 executor (2GB).' },
    { t: '00:16:10', l: 'INFO', m: 'Stage 1/1 completed. 4 tasks processed.' },
    { t: '00:16:11', l: 'INFO', m: 'Total duration: 1min 10s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700008_20260403_DAY_1': [
    { t: '00:30:01', l: 'INFO', m: 'Task ods_refund_event started. Instance: inst_7700008_20260403_DAY_1' },
    { t: '00:30:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30008' },
    { t: '00:30:05', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '00:31:18', l: 'ERROR', m: 'Schema mismatch: column "refund_reason_v2" not found in source table. Expected schema version: 3.1, actual: 2.8', hl: true },
    { t: '00:31:19', l: 'ERROR', m: 'Task failed. Exit code: 1', hl: true }
  ],
  'di_scheduler.studio_7700009_20260403_DAY_1': [
    { t: '00:30:01', l: 'INFO', m: 'Task ods_coupon_usage started. Instance: inst_7700009_20260403_DAY_1' },
    { t: '00:30:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30009' },
    { t: '00:30:05', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '00:35:22', l: 'INFO', m: 'Stage 1/1 completed. 128 tasks processed.' },
    { t: '00:35:23', l: 'INFO', m: 'Total duration: 5min 22s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700010_20260403_DAY_1': [
    { t: '00:30:01', l: 'INFO', m: 'Task ods_logistics_track started. Instance: inst_7700010_20260403_DAY_1' },
    { t: '00:30:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30010' },
    { t: '00:30:05', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '00:42:15', l: 'WARN', m: 'API source response slow: avg latency 2500ms (threshold: 500ms)', hl: true },
    { t: '00:50:33', l: 'INFO', m: 'Stage 1/2 completed. 256 tasks processed.' },
    { t: '00:58:00', l: 'INFO', m: 'Stage 2/2 still in progress. 180/256 tasks done.' }
  ],
  'di_scheduler.studio_7700011_20260403_DAY_1': [
    { t: '01:00:01', l: 'INFO', m: 'Task ods_inventory_snapshot started. Instance: inst_7700011_20260403_DAY_1' },
    { t: '01:00:03', l: 'INFO', m: 'Spark application submitted. App ID: application_1711929600_30011' },
    { t: '01:00:05', l: 'INFO', m: 'Spark application running. Allocated 2 executors (4GB each).' },
    { t: '01:08:42', l: 'INFO', m: 'Stage 1/1 completed. 64 tasks processed.' },
    { t: '01:08:43', l: 'INFO', m: 'Total duration: 8min 42s. Exit code: 0' }
  ],
  'di_scheduler.studio_7700012_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_user_retention scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'INFO', m: 'Upstream etl_data_warehouse (inst_7700001) status: Running' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream not ready. Instance entering WAITING state.', hl: true }
  ],
  'di_scheduler.studio_7700013_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_funnel_analysis scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ],
  'di_scheduler.studio_7700014_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_revenue_dashboard scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ],
  'di_scheduler.studio_7700015_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_cohort_weekly scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ],
  'di_scheduler.studio_7700016_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_churn_prediction scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ],
  'di_scheduler.studio_7700017_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_ab_test_result scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ],
  'di_scheduler.studio_7700018_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_category_ranking scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ],
  'di_scheduler.studio_7700019_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_merchant_score scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ],
  'di_scheduler.studio_7700020_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_search_quality scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ],
  'di_scheduler.studio_7700021_20260403_DAY_1': [
    { t: '06:00:00', l: 'INFO', m: 'Task ads_realtime_monitor scheduled. Checking upstream dependencies...' },
    { t: '06:00:01', l: 'WARN', m: 'Upstream etl_data_warehouse still Running. Waiting.', hl: true }
  ]
};

let conversationStep = 0;
let navHistory = ['view-tasklist'];
let isFullscreen = false;
function createEmptyContext() {
  return {
    taskName: null,
    taskCode: null,
    instanceId: null,
    skipDependency: {
      blockerTaskName: null,
      blockerInstanceId: null,
      blockerStatus: null
    }
  };
}

function normalizeContext(ctx) {
  var base = createEmptyContext();
  if (!ctx) return base;
  base.taskName = ctx.taskName || null;
  base.taskCode = ctx.taskCode || null;
  base.instanceId = ctx.instanceId || null;
  base.skipDependency = Object.assign({}, base.skipDependency, ctx.skipDependency || {});
  return base;
}

let currentContext = createEmptyContext();
let inputHistory = [];
let inputHistoryIdx = -1;
let sessionSeq = 0;

const SESSION_STORAGE_KEY = 'ops-agent-sessions';
const SESSION_MAX = 100;
const SESSION_EXPIRE_DAYS = 30;
const SESSION_AUTO_DELETE_DAYS = 90;
const SESSION_PRESET_IDS = ['conv-welcome', 'conv-failure', 'conv-info', 'conv-backfill', 'conv-large-dep'];
const SESSION_SHARE_VERSION = 1;
var currentShareDialog = { sessionId: null, url: '' };

const SessionManager = {
  data: { version: 1, activeSessionId: null, sessions: [] },

  init() {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (raw) {
      try { this.data = JSON.parse(raw); } catch (e) { this.data = { version: 1, activeSessionId: null, sessions: [] }; }
    }
    this.cleanExpired();
    this.ensurePresetSessions();
    if (!this.data.activeSessionId || !this.getSession(this.data.activeSessionId)) {
      this.data.activeSessionId = 'conv-welcome';
    }
    this.save();
  },

  ensurePresetSessions() {
    var base = Date.now();
    var presets = [
      { id: 'conv-welcome', title: 'New Chat', icon: 'general', autoTitle: true, relMs: 0, context: createEmptyContext() },
      { id: 'conv-failure', title: 'Instance Failure · update_table', icon: 'diagnosis', autoTitle: false, relMs: -3600000, context: normalizeContext({ taskName: 'update_table', taskCode: null, instanceId: 'di_scheduler.studio_6801187_20260403_DAY_2' }) },
      { id: 'conv-info', title: 'Info Query · update_table', icon: 'query', autoTitle: false, relMs: -7200000, context: normalizeContext({ taskName: 'update_table', taskCode: null, instanceId: null }) },
      { id: 'conv-backfill', title: 'Backfill · update_table', icon: 'operation', autoTitle: false, relMs: -86400000, context: normalizeContext({ taskName: 'update_table', taskCode: 'di_scheduler.studio_6801187', instanceId: null }) },
      { id: 'conv-large-dep', title: 'Deps · etl_data_warehouse', icon: 'query', autoTitle: false, relMs: -5400000, context: normalizeContext({ taskName: 'etl_data_warehouse', taskCode: 'di_scheduler.studio_7700001', instanceId: null }) }
    ];
    for (var i = 0; i < presets.length; i++) {
      var p = presets[i];
      if (this.getSession(p.id)) continue;
      var t = new Date(base + p.relMs).toISOString();
      this.data.sessions.push({
        id: p.id,
        title: p.title,
        autoTitle: p.autoTitle,
        icon: p.icon,
        createdAt: t,
        updatedAt: t,
        pinned: false,
        context: normalizeContext(p.context),
        messages: [],
        lastPreview: ''
      });
    }
  },

  save() {
    try { localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(this.data)); } catch (e) {}
  },

  createSession(id, title, icon, context) {
    if (!id) id = 'sess-' + Date.now();
    const session = {
      id: id,
      title: title || 'New Chat',
      autoTitle: true,
      icon: icon || 'general',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      pinned: false,
      context: normalizeContext(context),
      messages: [],
      lastPreview: ''
    };
    this.data.sessions.unshift(session);
    this.data.activeSessionId = id;
    if (this.data.sessions.length > SESSION_MAX) {
      var presets = this.data.sessions.filter(function (s) { return SESSION_PRESET_IDS.indexOf(s.id) >= 0; });
      var rest = this.data.sessions.filter(function (s) { return SESSION_PRESET_IDS.indexOf(s.id) < 0; });
      var maxRest = Math.max(0, SESSION_MAX - presets.length);
      this.data.sessions = rest.slice(0, maxRest).concat(presets);
    }
    this.save();
    return session;
  },

  getSession(id) {
    return this.data.sessions.find(function (s) { return s.id === id; });
  },

  getActive() {
    return this.getSession(this.data.activeSessionId);
  },

  setActive(id) {
    this.data.activeSessionId = id;
    this.save();
  },

  updateSession(id, updates) {
    const s = this.getSession(id);
    if (s) {
      Object.assign(s, updates, { updatedAt: new Date().toISOString() });
      this.save();
    }
  },

  addMessage(id, role, content, html) {
    const s = this.getSession(id);
    if (s) {
      var str = (content == null || content === undefined) ? '' : String(content);
      var plain = str.replace(/<[^>]*>/g, '');
      var msg = { role: role, content: str, time: new Date().toISOString() };
      if (role === 'agent' && html) msg.html = html;
      s.messages.push(msg);
      s.updatedAt = new Date().toISOString();
      s.lastPreview = plain.substring(0, 60);
      this.save();
    }
  },

  deleteSession(id) {
    this.data.sessions = this.data.sessions.filter(function (s) { return s.id !== id; });
    this.save();
  },

  togglePin(id) {
    const s = this.getSession(id);
    if (s) { s.pinned = !s.pinned; this.save(); }
  },

  renameSession(id, newTitle) {
    const s = this.getSession(id);
    if (s) { s.title = newTitle; s.autoTitle = false; this.save(); }
  },

  search(query) {
    if (!query) return this.data.sessions.slice();
    const q = query.toLowerCase();
    return this.data.sessions.filter(function (s) {
      return s.title.toLowerCase().includes(q) || (s.lastPreview && s.lastPreview.toLowerCase().includes(q));
    });
  },

  cleanExpired() {
    const now = Date.now();
    this.data.sessions = this.data.sessions.filter(function (s) {
      const age = (now - new Date(s.updatedAt).getTime()) / 86400000;
      return age < SESSION_AUTO_DELETE_DAYS;
    });
  },

  clearAll(keepActiveId) {
    this.data.sessions = this.data.sessions.filter(function (s) {
      return s.id === keepActiveId || SESSION_PRESET_IDS.indexOf(s.id) >= 0;
    });
    this.save();
  },

  getTimeGroup(dateStr) {
    const now = new Date();
    const d = new Date(dateStr);
    const diff = (now - d) / 86400000;
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const itemDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    if (itemDay.getTime() === today.getTime()) return 'Today';
    if (itemDay.getTime() === today.getTime() - 86400000) return 'Yesterday';
    if (diff < 7) return 'Last 7 Days';
    if (diff < 30) return 'Last 30 Days';
    return 'Older';
  },

  getRelativeTime(dateStr) {
    const now = Date.now();
    const d = new Date(dateStr).getTime();
    const diff = (now - d) / 1000;
    if (diff < 60) return 'Just now';
    if (diff < 3600) return Math.floor(diff / 60) + ' min ago';
    const dObj = new Date(dateStr);
    const today = new Date();
    if (dObj.toDateString() === today.toDateString()) return dObj.toTimeString().substring(0, 5);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (dObj.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return dObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  },

  isExpiringSoon(dateStr) {
    const age = (Date.now() - new Date(dateStr).getTime()) / 86400000;
    return age > (SESSION_EXPIRE_DAYS - 3) && age < SESSION_EXPIRE_DAYS;
  }
};

function getSessionIcon(intentType) {
  if (/diagnosis|search_instances/.test(intentType)) return 'diagnosis';
  if (/info_|capability/.test(intentType)) return 'query';
  if (/op_|patrol/.test(intentType)) return 'operation';
  return 'general';
}

let isFloating = false;
let floatDrag = { on: false, dx: 0, dy: 0 };
let resizeDrag = { on: false, startX: 0, startW: 420 };

const PRI_ARROW = { P1: '⇌ 1', P2: '⇌ 2', P3: '⇌ 3', P4: '⇌ 4', P5: '⇌ 5' };
const PRI_LABEL = { P1: 'Lowest', P2: 'Low', P3: 'Medium', P4: 'High', P5: 'Highest' };
function getPriorityNum(p) { return parseInt((p || 'P3').replace('P','')); }

const DEPS = {
  update_table: { up: ['ods_raw_order_data','dim_user_info','ods_product_catalog'], down: ['dws_order_summary_daily','ads_order_report'] },
  sync_user_data: { up: [], down: ['dwd_payment_detail'] },
  dwd_payment_detail: { up: ['sync_user_data'], down: [] },
  ods_raw_order_data: { up: [], down: ['update_table'] },
  dim_user_info: { up: [], down: ['update_table'] },
  ods_product_catalog: { up: [], down: ['update_table'] },
  dws_order_summary_daily: { up: ['update_table'], down: [] },
  ads_order_report: { up: ['update_table'], down: [] },
  etl_data_warehouse: {
    up: ['ods_raw_order_data','dim_user_info','ods_product_catalog','sync_user_data','dwd_payment_detail',
         'ods_click_stream','ods_ad_impression','ods_search_log','dim_product_attr','dim_geo_region',
         'dim_channel_info','ods_refund_event','ods_coupon_usage','ods_logistics_track','ods_inventory_snapshot'],
    down: ['dws_order_summary_daily','ads_order_report','ads_user_retention','ads_funnel_analysis',
           'ads_revenue_dashboard','ads_cohort_weekly','ads_churn_prediction','ads_ab_test_result',
           'ads_category_ranking','ads_merchant_score','ads_search_quality','ads_realtime_monitor']
  }
};
const SVG_LINK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>';

function statusBadgeClass(s) {
  if (s === 'Failed') return 'failed';
  if (s === 'Running') return 'running';
  if (s === 'Waiting') return 'waiting';
  return 'success';
}

function getTaskInstances(taskName) {
  return Object.entries(INSTANCES).filter(function(e) { return e[1].task === taskName; });
}

function getUnresolvedUpstreamCandidates(taskName) {
  var dep = DEPS[taskName] || { up: [], down: [] };
  return dep.up.map(function(upTask) {
    var upInst = getTaskInstances(upTask).find(function(e) { return e[1].status !== 'Successful'; });
    if (!upInst) return null;
    return {
      taskName: upTask,
      instanceId: upInst[0],
      status: upInst[1].status || 'Unknown'
    };
  }).filter(Boolean);
}

function getSkipDependencyRequestState(text, ctx) {
  var normalized = (text || '').replace(/\./g, '_');
  var candidates = getUnresolvedUpstreamCandidates(ctx.taskName || '');
  var explicitAll = /skip\s+all|all\s+dependenc|全部.*依赖|所有.*依赖|全部.*上游|所有.*上游/i.test(text || '');
  var explicitInstance = null;
  for (var i = 0; i < candidates.length; i++) {
    if ((text || '').indexOf(candidates[i].instanceId) >= 0) {
      explicitInstance = candidates[i];
      break;
    }
  }
  var explicitTask = null;
  if (!explicitInstance) {
    for (var j = 0; j < candidates.length; j++) {
      if (normalized.indexOf(candidates[j].taskName) >= 0 || (text || '').indexOf(candidates[j].taskName) >= 0) {
        explicitTask = candidates[j];
        break;
      }
    }
  }
  var blocker = ctx.skipDependency || {};
  var blockerCandidate = candidates.find(function(c) {
    return c.taskName === blocker.blockerTaskName || c.instanceId === blocker.blockerInstanceId;
  }) || null;
  var preselectedTargets = [];
  var recommendedTarget = null;
  if (explicitAll) {
    preselectedTargets = candidates.map(function(c) { return c.taskName; });
  } else if (explicitInstance || explicitTask) {
    recommendedTarget = explicitInstance || explicitTask;
    preselectedTargets = recommendedTarget ? [recommendedTarget.taskName] : [];
  } else if (blockerCandidate) {
    recommendedTarget = blockerCandidate;
    preselectedTargets = [blockerCandidate.taskName];
  } else if (candidates.length === 1) {
    recommendedTarget = candidates[0];
    preselectedTargets = [candidates[0].taskName];
  }
  if (recommendedTarget) {
    candidates = [recommendedTarget].concat(candidates.filter(function(c) { return c.taskName !== recommendedTarget.taskName; }));
  }
  return {
    candidates: candidates,
    preselectedTargets: preselectedTargets,
    recommendedTarget: recommendedTarget,
    explicitAll: explicitAll
  };
}

function renderSkipDependencyTarget(target, options) {
  if (!target) return '';
  var opts = options || {};
  var checkboxId = opts.checkboxId || '';
  var checked = opts.checked ? ' checked' : '';
  var recommendedBadge = opts.recommended ? '<span class="skip-target-reco">Recommended</span>' : '';
  var checkboxHtml = checkboxId ? '<input class="skip-target-checkbox" type="checkbox" id="' + checkboxId + '" value="' + target.taskName + '"' + checked + ' onchange="syncSkipDependencySelectionState(\'' + opts.uid + '\')"/>' : '';
  return '<div class="skip-target-item">' +
    '<label class="skip-target-row" for="' + checkboxId + '">' +
    checkboxHtml +
    '<div class="skip-target-main">' +
    '<div class="skip-target-top">' +
    '<span class="skip-target-name" onclick="navToTask(\'' + target.taskName + '\')">' + target.taskName + '</span>' +
    recommendedBadge +
    '<span class="status-badge ' + statusBadgeClass(target.status) + '" style="font-size:10px;padding:0 5px;">' + target.status + '</span>' +
    '</div>' +
    (target.instanceId ? '<div class="skip-target-inst">' + target.instanceId + '</div>' : '') +
    '</div>' +
    '</label>' +
    '</div>';
}

function switchView(viewId) {
  if (isFullscreen) toggleFullscreen();
  const current = document.querySelector('.left-view.active');
  if (current && current.id !== viewId) navHistory.push(viewId);
  document.querySelectorAll('.left-view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(viewId);
  if (el) el.classList.add('active');
  updateSidebarNav(viewId);
}

function goBack() {
  if (navHistory.length > 1) {
    navHistory.pop();
    const prev = navHistory[navHistory.length - 1];
    document.querySelectorAll('.left-view').forEach(v => v.classList.remove('active'));
    const p = document.getElementById(prev);
    if (p) p.classList.add('active');
    updateSidebarNav(prev);
  }
}

function updateSidebarNav(viewId) {
  document.querySelectorAll('.sb-item').forEach(i => i.classList.remove('active'));
  const ni = document.getElementById('nav-instances');
  const nr = document.getElementById('nav-rerun');
  const nm = document.getElementById('nav-marker');
  const ns = document.getElementById('nav-sched');
  const na = document.getElementById('nav-alarm');
  if (viewId === 'view-all-instances' && ni) ni.classList.add('active');
  else if ((viewId === 'view-rerun-list' || viewId === 'view-event') && nr) nr.classList.add('active');
  else if ((viewId === 'view-marker-search' || viewId === 'view-marker-view') && nm) nm.classList.add('active');
  else if (viewId === 'view-alarm-policy' && na) na.classList.add('active');
  else if (ns) ns.classList.add('active');
}

function openAllInstances(statusFilter) {
  switchView('view-all-instances');
  const sel = document.getElementById('ai-filter-status');
  if (!sel) return;
  const map = { total: '', success: 'Successful', failed: 'Failed', running: 'Running', waiting: 'Waiting' };
  const v = map[statusFilter] !== undefined ? map[statusFilter] : '';
  sel.value = v;
  sel.style.color = v ? '#333' : '#BFBFBF';
  filterInstanceTable(v);
}

function filterInstanceTable(statusValue) {
  const table = document.getElementById('ai-instance-table');
  if (!table) return;
  const rows = table.querySelectorAll('tbody tr');
  var visible = 0;
  rows.forEach(row => {
    if (!statusValue) { row.style.display = ''; visible++; return; }
    var st = row.getAttribute('data-status') || '';
    var show = (st === statusValue);
    row.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  var countEl = document.getElementById('ai-instance-count');
  if (countEl) countEl.textContent = visible + ' Search Results';
}

function navToRerunEvent(taskName, eventName) {
  switchView('view-event');
  var titleEl = document.querySelector('#view-event .pg-title');
  if (titleEl) {
    titleEl.innerHTML = '<span class="status-badge running">Running</span> ' + (eventName || taskName);
  }
}

function navToTask(taskName) {
  const t = TASKS[taskName];
  if (!t) { switchView('view-taskview-matrix'); return; }
  currentContext.taskName = taskName;
  currentContext.taskCode = t.code;
  currentContext.instanceId = null;
  const upd = root => {
    if (!root) return;
    const title = root.querySelector('.pg-title-row .pg-title');
    if (title) title.innerHTML = taskName + ' ' + SVG_LINK;
    const meta = root.querySelector('.pg-meta');
    if (!meta) return;
    meta.querySelectorAll('.pg-meta-item').forEach(sp => {
      const txt = sp.textContent || '';
      if (txt.indexOf('Task Type') === 0) sp.innerHTML = 'Task Type <span class="type-badge">' + t.type + '</span>';
      if (txt.indexOf('Priority') === 0) sp.innerHTML = 'Priority <span style="color:#333">' + (PRI_ARROW[t.priority] || t.priority) + '</span>';
      if (txt.indexOf('Task Code') >= 0) sp.innerHTML = 'Task Code <span style="color:#1890FF">' + t.code + ' <span style="cursor:pointer">📋</span></span>';
    });
  };
  upd(document.getElementById('view-taskview-matrix'));
  upd(document.getElementById('view-taskview-list'));
  upd(document.getElementById('view-lineage'));
  upd(document.getElementById('view-taskview-alarm'));
  renderAlarmSetting(taskName);
  const listView = document.getElementById('view-taskview-list');
  if (listView) {
    const tbody = listView.querySelector('.data-table tbody');
    if (tbody) {
      const taskInstances = Object.entries(INSTANCES).filter(([,v]) => v.task === taskName);
      tbody.innerHTML = taskInstances.map(([id, inst]) => {
        const isFailed = inst.status === 'Failed';
        const rowBg = isFailed ? ' style="background:#FFF1F0;"' : '';
        return '<tr' + rowBg + '><td><input type="checkbox" style="accent-color:#1890FF"/></td>' +
          '<td><a class="link" onclick="navToInstance(\'' + id + '\')">' + id + '</a></td>' +
          '<td>Schedule</td><td>2026-04-03 00:00:00</td>' +
          '<td><span class="status-badge ' + statusBadgeClass(inst.status) + '">' + inst.status + '</span></td>' +
          '<td>2026-04-03</td><td>2026-04-03</td><td>2026-04-03</td><td>-</td></tr>';
      }).join('');
      const pgRight = listView.querySelector('.pg-right span');
      if (pgRight) pgRight.textContent = taskInstances.length + ' Search Results';
    }
  }
  // Update matrix view grid
  const matrixView = document.getElementById('view-taskview-matrix');
  if (matrixView) {
    const matrixTbody = matrixView.querySelector('.data-table tbody');
    if (matrixTbody) {
      const taskInsts = Object.entries(INSTANCES).filter(([,v]) => v.task === taskName);
      var blocks = taskInsts.map(function(e) {
        var id = e[0], s = e[1].status;
        var bg = s === 'Failed' ? '#FF4D4F' : s === 'Running' ? '#1890FF' : s === 'Waiting' ? '#FA8C16' : '#52C41A';
        return '<div style="width:18px;height:18px;background:' + bg + ';border-radius:3px;cursor:pointer;" onclick="navToInstance(\'' + id + '\')" title="' + s + ' - ' + id + '"></div>';
      }).join('');
      matrixTbody.innerHTML = '<tr><td style="padding-left:24px;"><input type="checkbox" style="accent-color:#1890FF;margin-right:12px;"/>' + taskName + '</td><td style="text-align:right;"><div style="display:inline-flex;gap:2px;">' + blocks + '</div></td></tr>';
    }
    var matrixChart = matrixView.querySelector('[style*="display:flex;align-items:flex-end;gap:4px"]');
    if (matrixChart) {
      const taskInsts = Object.entries(INSTANCES).filter(([,v]) => v.task === taskName);
      var bars = taskInsts.map(function(e) {
        var id = e[0], s = e[1].status;
        var bg = s === 'Failed' ? '#FF4D4F' : s === 'Running' ? '#1890FF' : s === 'Waiting' ? '#FA8C16' : '#52C41A';
        var h = Math.floor(Math.random() * 40) + 30;
        return '<div style="width:24px;height:' + h + 'px;background:' + bg + ';border-radius:3px 3px 0 0;cursor:pointer;" onclick="navToInstance(\'' + id + '\')" title="' + s + '"></div>';
      }).join('');
      matrixChart.innerHTML = '<div style="font-size:11px;color:#8C8C8C;writing-mode:vertical-lr;text-orientation:mixed;transform:rotate(180deg);margin-right:4px;height:80px;display:flex;align-items:center;">4 min</div><div style="display:flex;flex-direction:column;align-items:center;gap:2px;"><div style="font-size:10px;color:#8C8C8C;">Apr 3, 00:00</div><div style="display:flex;gap:2px;align-items:flex-end;">' + bars + '</div></div>';
    }
  }
  updateLineage(taskName);
  switchView('view-taskview-matrix');
}

function updateLineage(taskName) {
  const lineage = document.getElementById('view-lineage');
  if (!lineage) return;
  const canvas = lineage.querySelector('.dag-canvas');
  if (!canvas) return;
  const dep = DEPS[taskName] || { up: [], down: [] };
  const t = TASKS[taskName] || {};
  const taskInsts = Object.entries(INSTANCES).filter(([,v]) => v.task === taskName);
  const latestInst = taskInsts.length ? taskInsts[taskInsts.length - 1] : null;
  const statusText = latestInst ? latestInst[1].status : '';
  const statusColor = statusText === 'Failed' ? '#FF4D4F' : statusText === 'Running' ? '#FA8C16' : statusText === 'Waiting' ? '#D46B08' : '#52C41A';
  function dagNode(name, isCurrent) {
    var nt = TASKS[name] || {};
    var pri = nt.priority || 'P3';
    var priLabel = '☰ ' + getPriorityNum(pri) + ' (' + (PRI_LABEL[pri] || 'Medium') + ')';
    if (isCurrent) {
      var metaHtml = priLabel;
      if (statusText) metaHtml += ' · <span style="color:' + statusColor + '">' + statusText + '</span>';
      return '<div class="dag-node current"><div class="dag-node-icon" style="background:#F0F2F5;color:#1890FF;">SQL</div><div class="dag-node-info"><div class="dag-node-name">' + name + '</div><div class="dag-node-meta">' + metaHtml + '</div></div><button style="border:none;background:none;color:#8C8C8C;cursor:pointer;font-size:16px;padding:0 4px;">···</button></div>';
    }
    return '<div class="dag-node" onclick="navToTask(\'' + name + '\')"><div class="dag-node-icon" style="background:#F0F2F5;color:#1890FF;">SQL</div><div class="dag-node-info"><div class="dag-node-name">' + name + '</div><div class="dag-node-meta">' + priLabel + '</div></div></div>';
  }
  var arrowH = '<div class="dag-arrow-h"><svg width="40" height="12" viewBox="0 0 40 12"><path d="M0 6h32" stroke="#BFBFBF" stroke-width="1.5" fill="none"/><path d="M30 2l6 4-6 4" stroke="#BFBFBF" stroke-width="1.5" fill="none"/></svg></div>';
  if (dep.up.length === 0 && dep.down.length === 0) {
    canvas.innerHTML = '<div style="display:flex;align-items:center;">' + dagNode(taskName, true) + '</div>';
    return;
  }
  var leftCol = '', rightCol = '';
  if (dep.up.length > 0) {
    leftCol = '<div class="dag-col">' + dep.up.map(function(u) { return dagNode(u, false); }).join('') + '</div>';
  }
  if (dep.down.length > 0) {
    rightCol = '<div class="dag-col">' + dep.down.map(function(d) { return dagNode(d, false); }).join('') + '</div>';
  }
  var svgConnL = '', svgConnR = '';
  if (dep.up.length > 0) {
    var nh = 52;
    var totalH = dep.up.length * nh + (dep.up.length - 1) * 16;
    var midY = totalH / 2;
    var paths = '';
    for (var i = 0; i < dep.up.length; i++) {
      var ny = i * (nh + 16) + nh / 2;
      paths += '<path d="M0,' + ny + ' C20,' + ny + ' 20,' + midY + ' 40,' + midY + '" stroke="#BFBFBF" stroke-width="1.5" fill="none"/>';
    }
    paths += '<path d="M38,' + (midY-4) + ' l6,4 -6,4" stroke="#BFBFBF" stroke-width="1.5" fill="none"/>';
    svgConnL = '<div style="width:48px;flex-shrink:0;display:flex;align-items:center;"><svg width="48" height="' + totalH + '" viewBox="0 0 48 ' + totalH + '">' + paths + '</svg></div>';
  }
  if (dep.down.length > 0) {
    var nh2 = 52;
    var totalH2 = dep.down.length * nh2 + (dep.down.length - 1) * 16;
    var midY2 = totalH2 / 2;
    var paths2 = '';
    for (var j = 0; j < dep.down.length; j++) {
      var ny2 = j * (nh2 + 16) + nh2 / 2;
      paths2 += '<path d="M0,' + midY2 + ' C20,' + midY2 + ' 20,' + ny2 + ' 40,' + ny2 + '" stroke="#BFBFBF" stroke-width="1.5" fill="none"/>';
      paths2 += '<path d="M38,' + (ny2-4) + ' l6,4 -6,4" stroke="#BFBFBF" stroke-width="1.5" fill="none"/>';
    }
    svgConnR = '<div style="width:48px;flex-shrink:0;display:flex;align-items:center;"><svg width="48" height="' + totalH2 + '" viewBox="0 0 48 ' + totalH2 + '">' + paths2 + '</svg></div>';
  }
  canvas.innerHTML = '<div style="display:flex;align-items:center;gap:0;">' + leftCol + svgConnL + dagNode(taskName, true) + svgConnR + rightCol + '</div>';
}

function updateInstanceLineage(instanceId) {
  const ilv = document.getElementById('view-instance-lineage');
  if (!ilv) return;
  const canvas = document.getElementById('instance-lineage-canvas');
  if (!canvas) return;
  const inf = INSTANCES[instanceId];
  if (!inf) return;
  const taskName = inf.task;
  const t = TASKS[taskName] || {};
  const dep = DEPS[taskName] || { up: [], down: [] };

  const titleRow = ilv.querySelector('.pg-title-row .pg-title');
  if (titleRow) titleRow.innerHTML = '<span class="status-badge ' + statusBadgeClass(inf.status) + '">' + inf.status + '</span> ' + taskName + ' ' + SVG_LINK;
  const meta = ilv.querySelector('.pg-meta');
  if (meta) {
    meta.querySelectorAll('.pg-meta-item').forEach(function(sp) {
      var txt = sp.textContent || '';
      if (txt.indexOf('Instance Code') >= 0) sp.innerHTML = '<span style="color:#8C8C8C">Instance Code</span> <span style="color:#1890FF">' + instanceId + '</span>';
      if (txt.indexOf('Task Type') === 0) sp.innerHTML = 'Task Type <span class="type-badge">' + (t.type || 'Spark SQL') + '</span>';
      if (txt.indexOf('Priority') === 0) sp.innerHTML = 'Priority <span style="color:#333">' + (PRI_ARROW[t.priority] || t.priority) + '</span>';
    });
  }

  function instNode(tName, isCurrent) {
    var tInsts = Object.entries(INSTANCES).filter(function(e) { return e[1].task === tName; });
    var latestInst = tInsts.length ? tInsts[tInsts.length - 1] : null;
    var instId = latestInst ? latestInst[0] : '';
    var instStatus = latestInst ? latestInst[1].status : 'Unknown';
    var statusColor = instStatus === 'Failed' ? '#FF4D4F' : instStatus === 'Running' ? '#FA8C16' : instStatus === 'Waiting' ? '#D46B08' : '#52C41A';
    var bgColor = isCurrent ? 'background:#F0F2F5;' : '';
    var borderColor = isCurrent ? 'border-color:#1890FF;box-shadow:0 2px 8px rgba(24,144,255,.15);' : '';
    var iconBg = isCurrent ? 'background:#F0F2F5;color:#1890FF;' : 'background:#F0F2F5;color:#1890FF;';
    var clickAttr = isCurrent ? '' : ' onclick="navToInstance(\'' + instId + '\')"';
    var extraBtn = isCurrent ? '<button style="border:none;background:none;color:#8C8C8C;cursor:pointer;font-size:16px;padding:0 4px;">···</button>' : '';
    return '<div class="dag-node' + (isCurrent ? ' current' : '') + '"' + clickAttr + ' style="' + bgColor + borderColor + '">' +
      '<div class="dag-node-icon" style="' + iconBg + '">SQL</div>' +
      '<div class="dag-node-info">' +
        '<div class="dag-node-name">' + tName + '</div>' +
        '<div class="dag-node-meta" style="font-size:9px;color:#8C8C8C;">' + (instId ? instId.split('_').slice(-3).join('_') : '-') + '</div>' +
        '<div class="dag-node-meta"><span style="color:' + statusColor + '">' + instStatus + '</span></div>' +
      '</div>' + extraBtn + '</div>';
  }

  if (dep.up.length === 0 && dep.down.length === 0) {
    canvas.innerHTML = '<div style="display:flex;align-items:center;">' + instNode(taskName, true) + '</div>';
    return;
  }
  var leftCol = '', rightCol = '';
  if (dep.up.length > 0) {
    leftCol = '<div class="dag-col">' + dep.up.map(function(u) { return instNode(u, false); }).join('') + '</div>';
  }
  if (dep.down.length > 0) {
    rightCol = '<div class="dag-col">' + dep.down.map(function(d) { return instNode(d, false); }).join('') + '</div>';
  }
  var svgConnL = '', svgConnR = '';
  if (dep.up.length > 0) {
    var nh = 68;
    var totalH = dep.up.length * nh + (dep.up.length - 1) * 16;
    var midY = totalH / 2;
    var paths = '';
    for (var ii = 0; ii < dep.up.length; ii++) {
      var ny = ii * (nh + 16) + nh / 2;
      paths += '<path d="M0,' + ny + ' C20,' + ny + ' 20,' + midY + ' 40,' + midY + '" stroke="#BFBFBF" stroke-width="1.5" fill="none"/>';
    }
    paths += '<path d="M38,' + (midY-4) + ' l6,4 -6,4" stroke="#BFBFBF" stroke-width="1.5" fill="none"/>';
    svgConnL = '<div style="width:48px;flex-shrink:0;display:flex;align-items:center;"><svg width="48" height="' + totalH + '" viewBox="0 0 48 ' + totalH + '">' + paths + '</svg></div>';
  }
  if (dep.down.length > 0) {
    var nh2 = 68;
    var totalH2 = dep.down.length * nh2 + (dep.down.length - 1) * 16;
    var midY2 = totalH2 / 2;
    var paths2 = '';
    for (var jj = 0; jj < dep.down.length; jj++) {
      var ny2 = jj * (nh2 + 16) + nh2 / 2;
      paths2 += '<path d="M0,' + midY2 + ' C20,' + midY2 + ' 20,' + ny2 + ' 40,' + ny2 + '" stroke="#BFBFBF" stroke-width="1.5" fill="none"/>';
      paths2 += '<path d="M38,' + (ny2-4) + ' l6,4 -6,4" stroke="#BFBFBF" stroke-width="1.5" fill="none"/>';
    }
    svgConnR = '<div style="width:48px;flex-shrink:0;display:flex;align-items:center;"><svg width="48" height="' + totalH2 + '" viewBox="0 0 48 ' + totalH2 + '">' + paths2 + '</svg></div>';
  }
  canvas.innerHTML = '<div style="display:flex;align-items:center;gap:0;">' + leftCol + svgConnL + instNode(taskName, true) + svgConnR + rightCol + '</div>';
}

function navToInstance(instanceId) {
  const inf = INSTANCES[instanceId];
  const taskName = inf ? inf.task : 'update_table';
  const t = TASKS[taskName] || {};
  const status = inf ? inf.status : 'Failed';
  currentContext.instanceId = instanceId;
  currentContext.taskName = taskName;
  currentContext.taskCode = t.code || null;
  const badge = '<span class="status-badge ' + statusBadgeClass(status) + '">' + status + '</span> ';
  ['view-detail', 'view-syslog', 'view-code', 'view-instance-lineage'].forEach(vid => {
    const v = document.getElementById(vid);
    if (!v) return;
    const titleRow = v.querySelector('.pg-title-row .pg-title');
    if (titleRow) titleRow.innerHTML = badge + taskName + (vid === 'view-detail' ? ' ' + SVG_LINK : '');
    const meta = v.querySelector('.pg-meta');
    if (meta) {
      const html = meta.innerHTML;
      const idx = html.indexOf('Instance Code');
      if (idx >= 0) {
        const after = html.slice(idx);
        const m = after.match(/Instance Code\s*<span[^>]*>/);
        if (m) {
          const start = idx + m[0].length;
          const endSpan = html.indexOf('</span>', start);
          if (endSpan > start) meta.innerHTML = html.slice(0, start) + instanceId + html.slice(endSpan);
        }
      }
    }
    v.querySelectorAll('.info-row').forEach(row => {
      const k = row.querySelector('.info-key');
      const val = row.querySelector('.info-val');
      if (!k || !val) return;
      const key = k.textContent.trim();
      if (key === 'Task Name') val.textContent = taskName;
      if (key === 'Instance Code') { val.textContent = instanceId; val.classList.add('link'); }
      if (key === 'Task Code') val.innerHTML = '<a class="link" onclick="switchView(\'view-taskview-matrix\')">' + (t.code || '') + '</a>';
      if (key === 'Owner') val.textContent = t.owner || val.textContent;
      if (key === 'Task Type') val.innerHTML = '<span class="type-badge">' + (t.type || 'Spark SQL') + '</span>';
      if (key === 'Priority') val.textContent = (PRI_ARROW[t.priority] || t.priority) + ' (' + (PRI_LABEL[t.priority] || 'Medium') + ')';
    });
    if (v.id === 'view-detail') {
      const sec = v.querySelector('.info-section .info-section-title');
      if (sec && sec.textContent.trim() === 'Summary') {
        const b = v.querySelector('.info-section .status-badge');
        if (b) { b.className = 'status-badge ' + statusBadgeClass(status); b.textContent = status; }
      }
    }
  });
  updateCodeView(taskName);
  updateSyslog(instanceId);
  updateInstanceLineage(instanceId);
  switchView('view-detail');
}

function updateCodeView(taskName) {
  var cv = document.getElementById('view-code');
  if (!cv) return;
  var container = cv.querySelector('.code-container');
  if (!container) return;
  var code = TASK_CODES[taskName];
  if (code) container.innerHTML = code;
}

function summarizeLogEvents(logs, status) {
  var allText = logs.map(function(l) { return l.m; }).join(' ');
  var events = [];

  var stageMatches = allText.match(/Stage \d+\/\d+/g);
  var totalStages = stageMatches ? stageMatches[stageMatches.length - 1] : null;

  var executorMatch = allText.match(/Allocated (\d+) executors?\s*\((\d+\w+).*?\)/i);
  if (executorMatch) events.push('Allocated <strong>' + executorMatch[1] + '</strong> executors (' + executorMatch[2] + ' each)');

  if (totalStages) {
    var completedStages = (allText.match(/Stage \d+\/\d+ completed/g) || []).length;
    var totalNum = parseInt(totalStages.split('/')[1]);
    if (completedStages >= totalNum) events.push('All <strong>' + totalNum + '</strong> stages completed');
    else events.push('<strong>' + completedStages + '/' + totalNum + '</strong> stages completed');
  }

  var shuffleRead = allText.match(/Shuffle read:\s*([\d.]+ \w+)/i);
  var shuffleWrite = allText.match(/Shuffle write:\s*([\d.]+ \w+)/i);
  if (shuffleRead) events.push('Shuffle read: ' + shuffleRead[1]);
  if (shuffleWrite) events.push('Shuffle write: ' + shuffleWrite[1]);

  if (/GC overhead|GC time:\s*\d{2,}%/i.test(allText)) {
    var gcMatch = allText.match(/GC time:\s*(\d+%)/i);
    events.push('GC pressure detected' + (gcMatch ? ' (' + gcMatch[1] + ')' : ''));
  }
  if (/spill to disk/i.test(allText)) {
    var spillMatch = allText.match(/spill to disk:\s*([\d.]+ \w+)/i);
    events.push('Shuffle spill to disk' + (spillMatch ? ': ' + spillMatch[1] : ''));
  }
  if (/OutOfMemoryError|exceeding memory/i.test(allText)) events.push('<span style="color:#FF4D4F;">OutOfMemoryError thrown</span>');
  if (/killed by YARN|Container killed/i.test(allText)) {
    var memMatch = allText.match(/(\d+\.?\d*)\s*GB of (\d+\.?\d*)\s*GB.*memory/i);
    events.push('<span style="color:#FF4D4F;">Container killed by YARN</span>' + (memMatch ? ' (' + memMatch[1] + 'GB / ' + memMatch[2] + 'GB)' : ''));
  }
  if (/schema mismatch|column.*not found/i.test(allText)) {
    var colMatch = allText.match(/column "([^"]+)" not found/i);
    events.push('<span style="color:#FF4D4F;">Schema mismatch</span>' + (colMatch ? ': column <code style="background:#FFF1F0;padding:1px 4px;border-radius:3px;">' + colMatch[1] + '</code> missing' : ''));
  }
  if (/skew detected|running slowly/i.test(allText)) events.push('Possible data skew detected');
  if (/API.*slow|latency.*threshold|response slow/i.test(allText)) {
    var latMatch = allText.match(/avg latency\s*(\d+ms)/i);
    events.push('External API response slow' + (latMatch ? ' (avg ' + latMatch[1] + ')' : ''));
  }
  if (/upstream not ready/i.test(allText)) {
    var upMatch = allText.match(/[Uu]pstream\s+(\w+)/);
    var upStatus = /upstream.*Failed/i.test(allText) ? 'Failed' : 'Running';
    events.push('Blocked by upstream <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">' + (upMatch ? upMatch[1] : 'task') + '</code> (' + upStatus + ')');
  }
  if (/Waiting\s*>?\s*\d+h/i.test(allText)) {
    var waitMatch = allText.match(/Waiting\s*>?\s*(\d+)h/i);
    if (waitMatch) events.push('Waiting duration: >' + waitMatch[1] + ' hours');
  }
  if (/failed.*retries|failed \d+ times/i.test(allText)) {
    var retryMatch = allText.match(/failed (\d+) times/i);
    events.push('Task retried ' + (retryMatch ? retryMatch[1] : 'multiple') + ' times before failure');
  }

  var exitMatch = allText.match(/Exit code:\s*(\d+)/i);
  if (exitMatch) events.push('Exit code: <strong>' + exitMatch[1] + '</strong>');

  return events;
}

function genLogSummary(instanceId) {
  var logs = INSTANCE_LOGS[instanceId];
  var inst = INSTANCES[instanceId];
  var taskName = inst ? inst.task : 'unknown';
  var status = inst ? inst.status : 'Unknown';

  if (!logs || logs.length === 0) {
    return '<div class="msg-bubble" style="margin-top:4px;">Opened <strong>System Log</strong> for <strong>' + instanceId + '</strong> on the left panel.<br><br>' +
      '<div style="color:#8C8C8C;font-style:italic;">No log data available for this instance.</div></div>';
  }

  var errors = [];
  var warns = [];
  var duration = '';
  var appId = '';

  for (var i = 0; i < logs.length; i++) {
    var log = logs[i];
    if (log.l === 'ERROR') errors.push(log.m);
    if (log.l === 'WARN') warns.push(log.m);
    if (/Total duration/i.test(log.m)) duration = log.m.replace(/.*Total duration:\s*/i, '').replace(/\.\s*Exit.*/, '');
    if (/App ID|application_/i.test(log.m)) {
      var aid = log.m.match(/(application_[\w]+)/);
      if (aid) appId = aid[1];
    }
  }

  var timeRange = logs[0].t + ' — ' + logs[logs.length - 1].t;
  var statusColor = status === 'Failed' ? '#FF4D4F' : status === 'Running' ? '#1890FF' : status === 'Waiting' ? '#FAAD14' : '#52C41A';
  var statusIcon = status === 'Failed' ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4D4F" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>'
    : status === 'Running' ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
    : status === 'Waiting' ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FAAD14" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
    : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52C41A" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>';

  var keyEvents = summarizeLogEvents(logs, status);

  var html = '<div class="msg-bubble" style="margin-top:4px;">Opened <strong>System Log</strong> for <strong>' + taskName + '</strong> on the left panel.' +
    '<div style="margin-top:10px;padding:12px 14px;background:linear-gradient(135deg,#FAFBFF 0%,#F5F7FF 100%);border:1px solid #E8ECF4;border-radius:8px;">' +
    '<div style="font-size:12px;font-weight:600;color:#333;margin-bottom:8px;display:flex;align-items:center;gap:6px;">' +
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>' +
    'Log Summary</div>' +
    '<div style="font-size:12px;color:#595959;line-height:1.8;">';

  html += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">' + statusIcon +
    ' <span style="font-weight:500;color:' + statusColor + ';">' + status + '</span>' +
    '<span style="color:#BFBFBF;margin:0 4px;">|</span>' +
    '<span style="color:#8C8C8C;">' + timeRange + '</span>';
  if (duration) html += '<span style="color:#BFBFBF;margin:0 4px;">|</span><span style="color:#8C8C8C;">Duration: ' + duration + '</span>';
  html += '</div>';

  if (keyEvents.length > 0) {
    html += '<div style="margin-top:4px;padding:6px 10px;background:#FAFAFA;border-radius:4px;border:1px solid #F0F0F0;">' +
      '<div style="font-weight:500;color:#333;margin-bottom:4px;">Key Events</div>';
    for (var k = 0; k < keyEvents.length; k++) {
      html += '<div style="color:#595959;font-size:11.5px;line-height:1.7;">• ' + keyEvents[k] + '</div>';
    }
    html += '</div>';
  }

  if (errors.length > 0) {
    html += '<details style="margin-top:6px;" open><summary style="cursor:pointer;font-weight:500;color:#FF4D4F;font-size:12px;user-select:none;">Error Logs (' + errors.length + ')</summary>' +
      '<div style="margin-top:4px;padding:4px 8px;background:#FFF7F6;border-radius:4px;">';
    for (var e = 0; e < Math.min(errors.length, 3); e++) {
      var shortErr = errors[e].length > 140 ? errors[e].substring(0, 140) + '...' : errors[e];
      html += '<div style="color:#595959;font-size:11px;line-height:1.6;">• ' + shortErr + '</div>';
    }
    if (errors.length > 3) html += '<div style="color:#8C8C8C;font-size:11px;font-style:italic;">... and ' + (errors.length - 3) + ' more</div>';
    html += '</div></details>';
  }

  if (warns.length > 0) {
    html += '<details style="margin-top:4px;"><summary style="cursor:pointer;font-weight:500;color:#D48806;font-size:12px;user-select:none;">Warning Logs (' + warns.length + ')</summary>' +
      '<div style="margin-top:4px;padding:4px 8px;background:#FFFEF5;border-radius:4px;">';
    for (var w = 0; w < Math.min(warns.length, 3); w++) {
      var shortWarn = warns[w].length > 140 ? warns[w].substring(0, 140) + '...' : warns[w];
      html += '<div style="color:#595959;font-size:11px;line-height:1.6;">• ' + shortWarn + '</div>';
    }
    if (warns.length > 3) html += '<div style="color:#8C8C8C;font-size:11px;font-style:italic;">... and ' + (warns.length - 3) + ' more</div>';
    html += '</div></details>';
  }

  if (appId) html += '<div style="margin-top:4px;color:#8C8C8C;font-size:11px;">App ID: <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">' + appId + '</code></div>';

  if (status === 'Failed' || status === 'Running' || status === 'Waiting') {
    var diagInst = instanceId;
    html += '<div style="margin-top:8px;padding-top:6px;border-top:1px solid #F0F0F0;font-size:11.5px;color:#8C8C8C;">' +
      'For root cause analysis and fix suggestions, use ' +
      '<a style="color:#1890FF;cursor:pointer;text-decoration:none;font-weight:500;" onclick="simulateSendWithText(\'Diagnose instance ' + diagInst + '\')">Diagnose</a>.' +
      '</div>';
  }

  html += '</div></div></div>';
  return html;
}

function updateSyslog(instanceId) {
  var sv = document.getElementById('view-syslog');
  if (!sv) return;
  var content = sv.querySelector('.syslog-content');
  var toolbar = sv.querySelector('.syslog-toolbar span');
  if (!content) return;
  var logs = INSTANCE_LOGS[instanceId];
  if (!logs) {
    content.innerHTML = '<div class="log-line"><span class="lt">-</span> <span class="li">[INFO]</span> No logs available for this instance.</div>';
    if (toolbar) toolbar.textContent = 'Instance: ' + instanceId;
    return;
  }
  if (toolbar) toolbar.textContent = 'Instance: ' + instanceId;
  content.innerHTML = logs.map(function(l) {
    var cls = l.hl ? 'log-line highlighted' : 'log-line';
    var lcls = l.l === 'ERROR' ? 'le' : l.l === 'WARN' ? 'lw' : 'li';
    return '<div class="' + cls + '"><span class="lt">2026-04-03 ' + l.t + '</span> <span class="' + lcls + '">[' + l.l + ']</span> ' + l.m + '</div>';
  }).join('');
}

function linkTo(viewId, btnId, ctxOverride, withCodeSummary) {
  var ctx = ctxOverride || {};
  var tn = ctx.taskName || currentContext.taskName;
  var iid = ctx.instanceId || currentContext.instanceId;
  if (viewId === 'view-lineage' && tn) {
    updateLineage(tn);
    var lv = document.getElementById('view-lineage');
    if (lv) {
      var lt = lv.querySelector('.pg-title-row .pg-title');
      if (lt) lt.innerHTML = tn + ' ' + SVG_LINK;
    }
  }
  if (viewId === 'view-instance-lineage' && iid) {
    updateInstanceLineage(iid);
  }
  if (viewId === 'view-syslog' && iid) {
    updateSyslog(iid);
  }
  if (viewId === 'view-code' && tn) {
    updateCodeView(tn);
  }
  if ((viewId === 'view-syslog' || viewId === 'view-code' || viewId === 'view-detail' || viewId === 'view-instance-lineage') && (iid || tn)) {
    var inf = iid ? INSTANCES[iid] : null;
    var taskName = tn || (inf ? inf.task : 'update_table');
    var t = TASKS[taskName] || {};
    var status = inf ? inf.status : 'Unknown';
    var badge = inf ? '<span class="status-badge ' + statusBadgeClass(status) + '">' + status + '</span> ' : '';
    var v = document.getElementById(viewId);
    if (v) {
      var titleRow = v.querySelector('.pg-title-row .pg-title');
      if (titleRow) titleRow.innerHTML = badge + taskName + ' ' + SVG_LINK;
    }
  }
  switchView(viewId);
  if (btnId) {
    const btn = document.getElementById(btnId);
    if (btn && !btn.classList.contains('viewed')) {
      btn.classList.add('viewed');
      advanceConversation(btnId);
    }
  }
  var conv = document.querySelector('.conv-container.active');
  if (conv && !btnId) {
    var viewLabel = { 'view-syslog': 'System Log', 'view-code': 'Code', 'view-detail': 'Instance Details', 'view-lineage': 'Task Lineage', 'view-instance-lineage': 'Instance Lineage' }[viewId];
    if (viewLabel) {
      var annotation = '';
      var resolvedInst = iid || currentContext.instanceId;
      var resolvedTask = tn || currentContext.taskName || 'update_table';
      if (viewId === 'view-syslog' && resolvedInst) {
        annotation = genLogSummary(resolvedInst);
      } else if (viewId === 'view-syslog') {
        annotation = '<div class="msg-bubble" style="margin-top:4px;">Opened <strong>System Log</strong> on the left panel.</div>';
      } else if (viewId === 'view-code') {
        if (withCodeSummary) {
          var codeSummary = TASK_CODE_SUMMARIES[resolvedTask] || 'This task is a <strong>Spark SQL</strong> daily batch job.';
          annotation = '<div class="msg-bubble" style="margin-top:4px;">Opened code for <strong>' + resolvedTask + '</strong> on the left panel.<br><br><div style="margin-top:6px;padding:10px 14px;background:linear-gradient(135deg,#FAFBFF 0%,#F5F7FF 100%);border:1px solid #E8ECF4;border-radius:8px;"><div style="font-size:12px;font-weight:600;color:#333;margin-bottom:6px;display:flex;align-items:center;gap:6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M16 18l2-2-2-2M8 18l-2-2 2-2M14 4l-4 16"/></svg>Code Logic Summary</div><div style="font-size:12px;color:#595959;line-height:1.7;">' + codeSummary + '</div></div></div>';
        } else {
          annotation = '<div class="msg-bubble" style="margin-top:4px;">Opened code for <strong>' + resolvedTask + '</strong> on the left panel.</div>';
        }
      } else {
        annotation = '<div class="msg-bubble">Opened <strong>' + viewLabel + '</strong> on the left panel.</div>';
      }
      appendAgentMsg(conv, annotation);
    }
  }
}

function advanceConversation(triggerId) {
  if (triggerId === 'lb-syslog' && conversationStep < 1) {
    conversationStep = 1;
    showElement('msg-log-annotation');
    scrollActiveConv();
  } else if (triggerId === 'lb-code' && conversationStep < 2) {
    conversationStep = 2;
    showElement('msg-code-annotation');
    scrollActiveConv();
  }
}

function triggerRerunFlow() {
  showElement('msg-rerun-ask');
  scrollActiveConv();
  setTimeout(() => { showElement('msg-rerun-confirm'); scrollActiveConv(); }, 600);
}

function confirmRerun() {
  const btns = document.getElementById('rerun-btns');
  if (btns && btns.classList.contains('disabled')) return;
  if (btns) btns.classList.add('disabled');
  const params = document.getElementById('rerun-params');
  const warning = document.getElementById('rerun-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  if (btns) btns.innerHTML = '<div class="ac-done confirmed"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#389E0D" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="acd-info"><div class="acd-text">Rerun submitted successfully</div><div class="acd-sub">New instance ID DAY_3 · Applied executor memory=12g</div></div><a class="acd-link" onclick="linkTo(\'view-detail\')">View Details →</a></div>';
  showToast('Rerun submitted successfully!');
  scrollActiveConv();
}

function cancelOperation(uid) {
  const btns = document.getElementById(uid + '-btns');
  if (btns && btns.classList.contains('disabled')) return;
  if (btns) btns.classList.add('disabled');
  const params = document.getElementById(uid + '-params');
  const warning = document.getElementById(uid + '-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  if (btns) btns.innerHTML = '<div class="ac-done cancelled"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8C8C8C" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg></div><div class="acd-text">Operation Cancelled</div></div>';
  showToast('Operation Cancelled');
  scrollActiveConv();
}

function applyFix(btn, param, value) {
  btn.textContent = 'Applied ✓';
  btn.classList.add('applied');
  showToast('Parameter ' + param + ' = ' + value + ' applied');
}

function showElement(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'flex';
}

function scrollActiveConv() {
  setTimeout(() => {
    const conv = document.querySelector('.conv-container.active');
    if (conv) conv.scrollTo({ top: conv.scrollHeight, behavior: 'smooth' });
  }, 100);
}

function toggleMinimize() {
  setAgentPanelVisible(false);
}

function toggleAgentPanel() {
  var panel = document.getElementById('agentPanel');
  var isMin = panel.classList.contains('minimized');
  setAgentPanelVisible(isMin);
}

function setAgentPanelVisible(visible) {
  var panel = document.getElementById('agentPanel');
  var toggle = document.getElementById('tnAgentToggle');
  if (visible) {
    panel.classList.remove('minimized');
    if (toggle) toggle.classList.add('active');
  } else {
    panel.classList.add('minimized');
    if (toggle) toggle.classList.remove('active');
  }
  try { localStorage.setItem('ops-agent-panel-visible', visible ? '1' : '0'); } catch(e) {}
}

function toggleSidebar() {
  var sb = document.getElementById('mainSidebar');
  var txt = document.querySelector('.sb-toggle-text');
  sb.classList.toggle('collapsed');
  if (txt) txt.textContent = sb.classList.contains('collapsed') ? '' : 'Collapse';
}

function toggleFullscreen() {
  const layout = document.querySelector('.layout');
  const p = document.getElementById('agentPanel');
  if (isFloating) {
    isFloating = false;
    p.classList.remove('floating');
    p.style.left = '';
    p.style.top = '';
    p.style.right = '';
    var dBtn = document.getElementById('dockBtn');
    if (dBtn) dBtn.textContent = '⇄ Float';
  }
  if (p.classList.contains('minimized')) p.classList.remove('minimized');
  isFullscreen = !isFullscreen;
  layout.classList.toggle('agent-fullscreen', isFullscreen);
  if (isFullscreen) {
    p.style.width = '';
    p.style.minWidth = '';
  }
  const fs = document.getElementById('fsBtn');
  if (fs) {
    fs.title = isFullscreen ? 'Exit Fullscreen' : 'Fullscreen';
    fs.innerHTML = isFullscreen
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14h6v6m10-10h-6V4m0 6l7-7M3 21l7-7"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>';
  }
}

function toggleSessionList() {
  var dd = document.getElementById('historyDropdown');
  var bd = document.getElementById('hdBackdrop');
  var isOpen = dd.classList.contains('open');
  if (isOpen) {
    closeSessionList();
  } else {
    dd.style.display = '';
    var tabBar = document.getElementById('sessionTabBar');
    if (tabBar) {
      var rect = tabBar.getBoundingClientRect();
      var panelRect = document.getElementById('agentPanel').getBoundingClientRect();
      dd.style.top = (rect.bottom - panelRect.top) + 'px';
    }
    dd.classList.add('open');
    bd.classList.add('open');
    renderSessionList();
    var si = dd.querySelector('.hd-search-input');
    if (si) si.focus();
  }
}

function closeSessionList() {
  var dd = document.getElementById('historyDropdown');
  var bd = document.getElementById('hdBackdrop');
  if (dd) { dd.classList.remove('open'); dd.style.display = 'none'; }
  if (bd) bd.classList.remove('open');
  var searchInput = document.querySelector('.hd-search-input');
  if (searchInput) searchInput.value = '';
}

function renderSessionTabs() {
  var container = document.getElementById('sessionTabs');
  if (!container) return;
  var sessions = SessionManager.data.sessions.slice();
  sessions.sort(function(a, b) { return new Date(b.updatedAt) - new Date(a.updatedAt); });
  var activeId = SessionManager.data.activeSessionId;
  var html = '';
  var openIds = SessionManager.data.openTabIds || sessions.map(function(s){return s.id;});
  sessions.forEach(function(s) {
    if (openIds.indexOf(s.id) < 0) return;
    var isActive = s.id === activeId;
    var title = s.title || 'New Chat';
    if (title.length > 18) title = title.substring(0, 16) + '...';
    var shareIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>';
    html += '<div class="stb-tab' + (isActive ? ' active' : '') + '" data-session-id="' + s.id + '" onclick="handleTabClick(event,\'' + s.id + '\',this)" ondblclick="event.stopPropagation();event.preventDefault();startTabRename(\'' + s.id + '\',this)" title="' + (s.title || 'New Chat') + '">' +
      '<span class="stb-tab-title">' + title + '</span>' +
      '<span class="stb-tab-share" title="Share Chat" onclick="event.stopPropagation();openShareDialog(\'' + s.id + '\')">' + shareIcon + '</span>' +
      '<span class="stb-tab-close" onclick="event.stopPropagation();closeTab(\'' + s.id + '\')">✕</span>' +
      '</div>';
  });
  container.innerHTML = html;
  setTimeout(updateMoreBtn, 50);
}

function updateMoreBtn() {
  var container = document.getElementById('sessionTabs');
  var moreBtn = document.getElementById('stbMoreBtn');
  if (!container || !moreBtn) return;
  var tabs = container.querySelectorAll('.stb-tab');
  var containerRect = container.getBoundingClientRect();
  var hasHidden = false;
  tabs.forEach(function(tab) {
    var r = tab.getBoundingClientRect();
    if (r.left < containerRect.left - 2 || r.right > containerRect.right + 2) hasHidden = true;
  });
  moreBtn.style.display = hasHidden ? '' : 'none';
  if (!hasHidden) closeMoreTabs();
}

function toggleMoreTabs() {
  var dd = document.getElementById('stbMoreDropdown');
  var btn = document.getElementById('stbMoreBtn');
  if (dd.classList.contains('open')) {
    closeMoreTabs();
  } else {
    var container = document.getElementById('sessionTabs');
    var tabs = container.querySelectorAll('.stb-tab');
    var containerRect = container.getBoundingClientRect();
    var activeId = SessionManager.data.activeSessionId;
    var html = '';
    tabs.forEach(function(tab) {
      var tabRect = tab.getBoundingClientRect();
      var isFullyVisible = tabRect.left >= containerRect.left - 2 && tabRect.right <= containerRect.right + 2;
      if (!isFullyVisible) {
        var sid = tab.getAttribute('data-session-id');
        var s = SessionManager.getSession(sid);
        if (!s) return;
        var isActive = sid === activeId;
        var title = s.title || 'New Chat';
        html += '<div class="stb-more-item' + (isActive ? ' active' : '') + '" onclick="switchSessionById(\'' + sid + '\');closeMoreTabs()">' +
          '<span class="stb-more-item-title">' + title + '</span>' +
          '<span class="stb-more-item-close" onclick="event.stopPropagation();closeTab(\'' + sid + '\');closeMoreTabs()">✕</span></div>';
      }
    });
    if (!html) { html = '<div style="padding:12px;text-align:center;color:#BFBFBF;font-size:12px;">All tabs visible</div>'; }
    dd.innerHTML = html;
    var tabBar = document.getElementById('sessionTabBar');
    if (tabBar) {
      var barRect = tabBar.getBoundingClientRect();
      var panelRect = document.getElementById('agentPanel').getBoundingClientRect();
      dd.style.top = (barRect.bottom - panelRect.top) + 'px';
    }
    dd.classList.add('open');
    if (btn) btn.classList.add('active');
  }
}

var _tabClickTimer = null;
var _tabClickId = null;
function handleTabClick(e, sessionId, tabEl) {
  e.stopPropagation();
  if (tabEl.querySelector('.stb-tab-rename-input')) return;
  if (_tabClickTimer && _tabClickId === sessionId) {
    clearTimeout(_tabClickTimer);
    _tabClickTimer = null;
    _tabClickId = null;
    startTabRename(sessionId, tabEl);
    return;
  }
  var isAlreadyActive = SessionManager.data.activeSessionId === sessionId;
  _tabClickId = sessionId;
  _tabClickTimer = setTimeout(function() {
    _tabClickTimer = null;
    _tabClickId = null;
    if (!isAlreadyActive) switchSessionById(sessionId);
  }, 280);
}

function startTabRename(sessionId, tabEl) {
  var titleSpan = tabEl.querySelector('.stb-tab-title');
  if (!titleSpan) return;
  var s = SessionManager.getSession(sessionId);
  if (!s) return;
  var currentTitle = s.title || 'New Chat';
  var input = document.createElement('input');
  input.type = 'text';
  input.value = currentTitle;
  input.className = 'stb-tab-rename-input';
  input.style.cssText = 'width:100%;border:1px solid #1890FF;border-radius:3px;font-size:12px;padding:1px 4px;outline:none;height:20px;box-sizing:border-box;background:#fff;color:#333;';
  titleSpan.replaceWith(input);
  input.focus();
  input.select();
  function finishRename() {
    var newTitle = input.value.trim();
    if (!newTitle) newTitle = currentTitle;
    if (newTitle !== currentTitle) {
      var isDup = SessionManager.data.sessions.some(function(ss) { return ss.id !== sessionId && ss.title === newTitle; });
      if (isDup) { showToast('Session name already exists'); newTitle = currentTitle; }
      else { SessionManager.renameSession(sessionId, newTitle); }
    }
    renderSessionTabs();
    renderSessionList();
  }
  input.addEventListener('blur', finishRename);
  input.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } if (e.key === 'Escape') { input.value = currentTitle; input.blur(); } });
}

function closeMoreTabs() {
  var dd = document.getElementById('stbMoreDropdown');
  var btn = document.getElementById('stbMoreBtn');
  if (dd) dd.classList.remove('open');
  if (btn) btn.classList.remove('active');
}

function closeTab(sessionId) {
  if (!SessionManager.data.openTabIds) SessionManager.data.openTabIds = SessionManager.data.sessions.map(function(s){return s.id;});
  var openIds = SessionManager.data.openTabIds;
  if (openIds.length <= 1) { showToast('Cannot close the only tab'); return; }
  var sess = SessionManager.getSession(sessionId);
  if (sess && (!sess.messages || sess.messages.length === 0)) {
    SessionManager.deleteSession(sessionId);
    var conv = document.getElementById(sessionId);
    if (conv) conv.remove();
  }
  var idx = openIds.indexOf(sessionId);
  if (idx >= 0) openIds.splice(idx, 1);
  SessionManager.save();
  var conv2 = document.getElementById(sessionId);
  if (conv2) conv2.classList.remove('active');
  var isActive = sessionId === SessionManager.data.activeSessionId;
  if (isActive) {
    var nextId = openIds[0];
    if (nextId) switchSessionById(nextId);
    else { var ns = SessionManager.createSession(null, 'New Chat', 'general'); openIds.push(ns.id); SessionManager.save(); switchSessionById(ns.id); }
  }
  renderSessionTabs();
}

function filterSessions(query) {
  renderSessionList(query);
}

function encodeSharePayload(payload) {
  var json = JSON.stringify(payload);
  var bytes = new TextEncoder().encode(json);
  var binary = '';
  for (var i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function decodeSharePayload(value) {
  var normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  while (normalized.length % 4) normalized += '=';
  var binary = atob(normalized);
  var bytes = new Uint8Array(binary.length);
  for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return JSON.parse(new TextDecoder().decode(bytes));
}

function isSharedMode() {
  return document.body.classList.contains('shared-mode');
}

function sanitizeSharedHtml(html) {
  if (!html) return '';
  var root = document.createElement('div');
  root.innerHTML = html;
  root.querySelectorAll('*').forEach(function(node) {
    for (var i = node.attributes.length - 1; i >= 0; i--) {
      var attrName = node.attributes[i].name;
      if (/^on/i.test(attrName)) node.removeAttribute(attrName);
    }
    if (node.matches('button, a, input, select, textarea')) {
      node.classList.add('shared-static-disabled');
      node.setAttribute('tabindex', '-1');
      if (node.tagName === 'BUTTON' || node.tagName === 'INPUT' || node.tagName === 'SELECT' || node.tagName === 'TEXTAREA') {
        node.setAttribute('disabled', 'disabled');
      }
      if (node.tagName === 'A') {
        node.removeAttribute('href');
        node.setAttribute('role', 'text');
      }
    }
    if (node.matches('.link-btn, .apply-btn, .ac-btn, .cb-act, .follow-up-item, .msg-act, .acd-link, .policy-link, .act-link, .wc-example, .sc-chip, .dep-expand-btn, .dag-node, .dep-name, .link')) {
      node.classList.add('shared-static-disabled');
      node.setAttribute('tabindex', '-1');
      node.setAttribute('aria-disabled', 'true');
    }
    if (node.matches('.ov-cell, .ov-anomaly')) {
      node.classList.add('shared-overview-readonly');
      node.setAttribute('tabindex', '-1');
      node.setAttribute('aria-disabled', 'true');
    }
    if (node.matches('.ac-btns, .link-btns, .cb-actions, .follow-up-wrap, .msg-actions, .shortcut-bar')) {
      node.classList.add('shared-static-snapshot');
    }
  });
  return root.innerHTML;
}

function snapshotMessageForShare(m) {
  return {
    role: m.role === 'user' ? 'user' : 'agent',
    content: m.content || '',
    html: m.html ? sanitizeSharedHtml(m.html) : '',
    time: m.time || new Date().toISOString()
  };
}

function buildSharedSessionUrl(sessionId) {
  var session = SessionManager.getSession(sessionId);
  if (!session) return null;
  var payload = {
    version: SESSION_SHARE_VERSION,
    sharedAt: new Date().toISOString(),
    session: {
      title: session.title || 'Shared Chat',
      icon: session.icon || 'general',
      context: session.context || { taskName: null, taskCode: null, instanceId: null },
      messages: (session.messages || []).map(snapshotMessageForShare)
    }
  };
  return window.location.origin + window.location.pathname + '?shared=1#share=' + encodeSharePayload(payload);
}

function importSharedSession(payload) {
  if (!payload || payload.version !== SESSION_SHARE_VERSION || !payload.session) throw new Error('Invalid share payload');
  var shared = payload.session;
  var importedTitle = (shared.title || 'Shared Chat') + ' (Shared)';
  var session = SessionManager.createSession(null, importedTitle, shared.icon || 'general', normalizeContext(shared.context));
  SessionManager.updateSession(session.id, {
    title: importedTitle,
    autoTitle: false,
    context: normalizeContext(shared.context),
    messages: (shared.messages || []).map(function(m) {
      return snapshotMessageForShare(m);
    }),
    lastPreview: (shared.messages && shared.messages.length > 0 ? String(shared.messages[shared.messages.length - 1].content || '').replace(/<[^>]*>/g, '').substring(0, 60) : '')
  });
  return session.id;
}

function openShareDialog(sessionId) {
  try {
    var url = buildSharedSessionUrl(sessionId);
    if (!url) {
      showToast('Unable to generate share link');
      return;
    }
    var session = SessionManager.getSession(sessionId);
    currentShareDialog.sessionId = sessionId;
    currentShareDialog.url = url;
    var titleEl = document.getElementById('shareModalSessionTitle');
    var metaEl = document.getElementById('shareModalSessionMeta');
    var linkEl = document.getElementById('shareModalLink');
    var modal = document.getElementById('shareModal');
    var backdrop = document.getElementById('shareModalBackdrop');
    if (titleEl) titleEl.textContent = (session && session.title) ? session.title : 'Untitled Chat';
    if (metaEl) {
      var msgCount = session && session.messages ? session.messages.length : 0;
      var updatedAt = session && session.updatedAt ? SessionManager.getRelativeTime(session.updatedAt) : 'Just now';
      metaEl.textContent = msgCount + ' messages · Updated ' + updatedAt;
    }
    if (linkEl) {
      linkEl.value = url;
      linkEl.scrollTop = 0;
      setTimeout(function() {
        linkEl.focus();
        linkEl.select();
      }, 0);
    }
    if (modal) modal.style.display = 'block';
    if (backdrop) backdrop.style.display = 'block';
  } catch (e) {
    showToast('Unable to generate share link');
  }
}

function closeShareDialog() {
  currentShareDialog.sessionId = null;
  currentShareDialog.url = '';
  var modal = document.getElementById('shareModal');
  var backdrop = document.getElementById('shareModalBackdrop');
  if (modal) modal.style.display = 'none';
  if (backdrop) backdrop.style.display = 'none';
}

function copyShareLink() {
  var url = currentShareDialog.url;
  if (!url) {
    showToast('No share link available');
    return;
  }
  navigator.clipboard.writeText(url).then(function() {
    showToast('Share link copied');
  }).catch(function() {
    var linkEl = document.getElementById('shareModalLink');
    if (linkEl) {
      linkEl.focus();
      linkEl.select();
    }
    showToast('Copy failed, select the link manually');
  });
}

function openSharePreview() {
  if (!currentShareDialog.url) {
    showToast('No share link available');
    return;
  }
  window.open(currentShareDialog.url, '_blank');
}

function copyCurrentPageLink() {
  var url = window.location.href;
  navigator.clipboard.writeText(url).then(function() {
    showToast('Share link copied');
  }).catch(function() {
    showToast('Unable to copy link');
  });
}

function renderMessageNode(m) {
  var msgDiv = document.createElement('div');
  if (m.role === 'user') {
    msgDiv.className = 'msg user';
    var userActions = isSharedMode() ? '' : '<div class="msg-actions user-actions"><button class="msg-act" title="Copy" onclick="copyUserMsg(this)">' + SVG_COPY + '</button></div>';
    msgDiv.innerHTML = '<div class="msg-av human">U</div><div class="msg-body"><div class="msg-bubble">' + escapeHtml(m.content || '') + '</div>' + userActions + '</div>';
    return msgDiv;
  }
  msgDiv.className = 'msg agent';
  if (m.html) {
    msgDiv.innerHTML = '<div class="msg-av agent">' + AGENT_SVG + '</div><div class="msg-body">' + (isSharedMode() ? sanitizeSharedHtml(m.html) : m.html) + '</div>';
  } else {
    var fallbackContent = m.content || '';
    msgDiv.innerHTML = '<div class="msg-av agent">' + AGENT_SVG + '</div><div class="msg-body"><div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">' + escapeHtml(fallbackContent) + '</div></div>' + (isSharedMode() ? '' : getMsgActionsHtml()) + '</div>';
  }
  return msgDiv;
}

function renderMessagesInto(container, messages) {
  if (!container) return;
  container.innerHTML = '';
  (messages || []).forEach(function(m) {
    container.appendChild(renderMessageNode(m));
  });
}

function enterSharedMode(payload, encodedShare) {
  var shared = payload.session || {};
  document.body.classList.add('shared-mode');
  closeSessionList();
  closeMoreTabs();
  setAgentPanelVisible(true);
  var panel = document.getElementById('agentPanel');
  if (panel) {
    panel.classList.remove('minimized');
    panel.classList.remove('floating');
    panel.style.left = '';
    panel.style.top = '';
    panel.style.right = '';
    panel.style.width = '';
    panel.style.minWidth = '';
  }
  var titleEl = document.querySelector('.ap-title');
  if (titleEl) titleEl.textContent = 'Scheduler Agent';
  var subtitleEl = document.querySelector('.ap-subtitle');
  if (subtitleEl) subtitleEl.textContent = 'Scheduler AI Ops Agent';
  var sharedBar = document.getElementById('sharedViewBar');
  if (sharedBar) sharedBar.style.display = 'none';
  var sessionTabs = document.getElementById('sessionTabs');
  if (sessionTabs) {
    var sharedTitle = shared.title || 'Shared Chat';
    var displayTitle = sharedTitle.length > 28 ? sharedTitle.substring(0, 26) + '...' : sharedTitle;
    sessionTabs.innerHTML = '<div class="stb-tab active" title="' + escapeHtml(sharedTitle) + '">' +
      '<span class="stb-tab-title">' + escapeHtml(displayTitle) + '</span>' +
      '</div>';
  }
  document.querySelectorAll('.conv-container').forEach(function(c) {
    c.classList.remove('active');
    c.style.display = 'none';
  });
  var inputArea = document.querySelector('.input-area');
  var sharedConv = document.getElementById('shared-view-conv');
  if (!sharedConv) {
    sharedConv = document.createElement('div');
    sharedConv.className = 'conv-container';
    sharedConv.id = 'shared-view-conv';
    if (inputArea && inputArea.parentNode) inputArea.parentNode.insertBefore(sharedConv, inputArea);
  }
  sharedConv.style.display = 'flex';
  sharedConv.classList.add('active');
  renderMessagesInto(sharedConv, shared.messages || []);
  currentContext = normalizeContext(shared.context);
  currentShareDialog.url = window.location.origin + window.location.pathname + '?shared=1#share=' + encodedShare;
  document.title = (shared.title || 'Shared Chat') + ' - Scheduler Agent';
  scrollActiveConv();
}

function renderSessionList(query) {
  var body = document.getElementById('sessionListBody');
  var sessions = SessionManager.search(query);
  sessions.sort(function (a, b) {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  var html = '';
  var lastGroup = '';
  var pinnedShown = false;

  sessions.forEach(function (s) {
    if (s.pinned) {
      if (!pinnedShown) { html += '<div class="sl-group">Pinned</div>'; pinnedShown = true; }
    } else {
      var group = SessionManager.getTimeGroup(s.updatedAt);
      if (group !== lastGroup) {
        html += '<div class="sl-group">' + group + '</div>';
        lastGroup = group;
      }
    }

    var isActive = s.id === SessionManager.data.activeSessionId;
    var expireIcon = SessionManager.isExpiringSoon(s.updatedAt) ? '<span class="si-expire-badge" title="Expiring soon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#BFBFBF" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>' : '';
    var preview = s.lastPreview ? '<div class="si-preview">' + s.lastPreview.substring(0, 40) + '</div>' : '';
    var pinBtnLabel = s.pinned ? 'Unpin' : 'Pin';
    var pinBtnIcon = s.pinned ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 3l-3 3-5-1-6 6 5 5-6 6"/><path d="M14.5 9.5L9 15"/></svg>' : '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17v5M9 11V6l-3-3h12l-3 3v5l4 4H5z"/></svg>';
    var shareBtnIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>';

    html += '<div class="session-item' + (isActive ? ' active' : '') + (s.pinned ? ' pinned' : '') + '" data-session-id="' + s.id + '" data-conv-id="' + s.id + '" onclick="switchSessionById(\'' + s.id + '\')">' +
      '<div class="si-content"><span class="si-title">' + s.title + '</span>' + preview + '</div>' +
      '<div class="si-right"><span class="si-time">' + SessionManager.getRelativeTime(s.updatedAt) + '</span>' + expireIcon + '</div>' +
      '<div class="si-actions">' +
      '<button type="button" class="si-act" title="Share" onclick="event.stopPropagation();openShareDialog(\'' + s.id + '\')">' + shareBtnIcon + '</button>' +
      '<button type="button" class="si-act" title="' + pinBtnLabel + '" onclick="event.stopPropagation();togglePinSession(\'' + s.id + '\')">' + pinBtnIcon + '</button>' +
      '<button type="button" class="si-act" title="Rename" onclick="event.stopPropagation();renameSession(this)"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>' +
      '<button type="button" class="si-act" title="Delete" onclick="event.stopPropagation();confirmDeleteSession(this,\'' + s.id + '\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg></button>' +
      '</div></div>';
  });

  if (sessions.length === 0) {
    html = '<div style="padding:24px 16px;text-align:center;color:#BFBFBF;font-size:12px;">No chats found</div>';
  }

  body.innerHTML = html;
}

function switchSessionById(sessionId) {
  if (!SessionManager.data.openTabIds) SessionManager.data.openTabIds = SessionManager.data.sessions.map(function(s){return s.id;});
  if (SessionManager.data.openTabIds.indexOf(sessionId) < 0) { SessionManager.data.openTabIds.push(sessionId); }
  SessionManager.setActive(sessionId);
  document.querySelectorAll('.conv-container').forEach(function (c) { c.classList.remove('active'); });
  var conv = document.getElementById(sessionId);
  if (!conv) {
    conv = document.createElement('div');
    conv.className = 'conv-container';
    conv.id = sessionId;
    var session = SessionManager.getSession(sessionId);
    if (session && session.messages && session.messages.length > 0) {
      session.messages.forEach(function (m) {
        var msgDiv = document.createElement('div');
        if (m.role === 'user') {
          msgDiv.className = 'msg user';
          msgDiv.innerHTML = '<div class="msg-av human">U</div><div class="msg-body"><div class="msg-bubble">' + escapeHtml(m.content) + '</div></div>';
        } else if (m.role === 'agent') {
          msgDiv.className = 'msg agent';
          if (m.html) {
            msgDiv.innerHTML = '<div class="msg-av agent">' + AGENT_SVG + '</div><div class="msg-body">' + m.html + '</div>';
          } else {
            var fallbackContent = m.content || '';
            msgDiv.innerHTML = '<div class="msg-av agent">' + AGENT_SVG + '</div><div class="msg-body">' +
              '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">' + escapeHtml(fallbackContent) + '</div></div>' +
              getMsgActionsHtml() + '</div>';
          }
        }
        conv.appendChild(msgDiv);
      });
    } else {
      conv.innerHTML = buildWelcomeCardHtml();
    }
    var inputArea = document.querySelector('.input-area');
    inputArea.parentNode.insertBefore(conv, inputArea);
  }
  conv.classList.add('active');
  var sess = SessionManager.getSession(sessionId);
  if (sess && sess.context) {
    currentContext = normalizeContext(sess.context);
  }
  closeSessionList();
  renderSessionTabs();
  scrollActiveConv();
}

function switchSession(el, convId) {
  if (el && el.querySelector && el.querySelector('.si-rename-input')) return;
  switchSessionById(convId);
}

function buildWelcomeCardHtml() {
  return '<div class="welcome-card">' +
    '<div class="wc-hero">' +
      '<div class="wc-hero-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M10 2l1.5 4.5L16 8l-4.5 1.5L10 14l-1.5-4.5L4 8l4.5-1.5z"/><path d="M18 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" opacity=".8"/><path d="M6 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" opacity=".5"/></svg></div>' +
      '<div class="wc-hero-text">Hi, I\'m your <b>Scheduler Agent</b></div>' +
    '</div>' +
    '<div class="wc-desc">I can identify anomalous instances, diagnose failures and pinpoint root causes, answer questions about tasks and instances in natural language, and execute ops actions like rerun or backfill on your behalf.</div>' +
    '<div class="wc-try-title"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Try asking me</div>' +
    '<div class="wc-examples">' +
      '<div class="wc-example" onclick="fillInput(\'Diagnose why instance di_scheduler.studio_6801187_20260403_DAY_2 failed\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg><span>Diagnose why instance studio_6801187_DAY_2 failed</span></div>' +
      '<div class="wc-example" onclick="fillInput(\'Show upstream and downstream dependencies for task update_table\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2" style="flex-shrink:0"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg><span>Show dependencies for task update_table</span></div>' +
      '<div class="wc-example" onclick="fillInput(\'Any anomalies in today\\\'s task runs?\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FA8C16" stroke-width="2" style="flex-shrink:0"><path d="M18 20V10M12 20V4M6 20v-6"/></svg><span>Any anomalies in today\'s task runs?</span></div>' +
    '</div>' +
  '</div>';
}

function createNewSession() {
  var session = SessionManager.createSession();
  if (!SessionManager.data.openTabIds) SessionManager.data.openTabIds = SessionManager.data.sessions.map(function(s){return s.id;});
  if (SessionManager.data.openTabIds.indexOf(session.id) < 0) SessionManager.data.openTabIds.push(session.id);
  SessionManager.save();
  var conv = document.createElement('div');
  conv.className = 'conv-container active';
  conv.id = session.id;
  conv.innerHTML = buildWelcomeCardHtml();
  document.querySelectorAll('.conv-container').forEach(function (c) { c.classList.remove('active'); });
  var inputArea = document.querySelector('.input-area');
  inputArea.parentNode.insertBefore(conv, inputArea);
  currentContext = createEmptyContext();
  closeSessionList();
  renderSessionTabs();
  showToast('New chat created');
  scrollActiveConv();
}

function renameSession(btn) {
  var item = btn.closest('.session-item');
  var titleSpan = item.querySelector('.si-title');
  var sessionId = item.getAttribute('data-session-id') || item.getAttribute('data-conv-id');
  var oldName = titleSpan.textContent;
  var input = document.createElement('input');
  input.className = 'si-rename-input';
  input.value = oldName;
  titleSpan.replaceWith(input);
  input.focus();
  input.select();
  input.addEventListener('click', function (e) { e.stopPropagation(); });
  input.addEventListener('mousedown', function (e) { e.stopPropagation(); });
  var finished = false;
  function finish(save) {
    if (finished) return;
    finished = true;
    var newName = save ? (input.value.trim() || oldName) : oldName;
    var span = document.createElement('span');
    span.className = 'si-title';
    span.textContent = newName;
    input.replaceWith(span);
    if (save && newName !== oldName) {
      var isDup = SessionManager.data.sessions.some(function(ss) { return ss.id !== sessionId && ss.title === newName; });
      if (isDup) { showToast('Session name already exists'); span.textContent = oldName; return; }
      if (sessionId) SessionManager.renameSession(sessionId, newName);
      renderSessionTabs();
      showToast('Chat renamed');
    }
  }
  input.addEventListener('blur', function () { finish(true); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
    if (e.key === 'Escape') { e.preventDefault(); finish(false); }
  });
}

function confirmDeleteSession(btn, sessionId) {
  var item = btn.closest('.session-item');
  var actions = item.querySelector('.si-actions');
  if (item.querySelector('.si-del-confirm')) return;
  var allSessions = SessionManager.data.sessions;
  if (allSessions.length <= 1) { showToast('Cannot delete the only chat'); return; }
  actions.style.display = 'none';
  var confirmDiv = document.createElement('div');
  confirmDiv.className = 'si-del-confirm';
  confirmDiv.innerHTML = 'Delete? <button class="si-del-yes" onclick="event.stopPropagation();executeDeleteSession(\'' + sessionId + '\',this)">Yes</button><button class="si-del-no" onclick="event.stopPropagation();cancelDeleteSession(this)">No</button>';
  confirmDiv.addEventListener('click', function (e) { e.stopPropagation(); });
  item.appendChild(confirmDiv);
}

function executeDeleteSession(sessionId, btn) {
  var item = btn.closest('.session-item');
  var isActive = sessionId === SessionManager.data.activeSessionId;
  SessionManager.deleteSession(sessionId);
  var conv = document.getElementById(sessionId);
  if (conv) conv.remove();
  if (isActive) {
    var remaining = SessionManager.data.sessions;
    if (remaining.length > 0) {
      switchSessionById(remaining[0].id);
    } else {
      var newS = SessionManager.createSession(null, 'New Chat', 'general');
      switchSessionById(newS.id);
    }
  }
  item.style.transition = 'opacity .3s,height .3s,padding .3s';
  item.style.opacity = '0';
  item.style.height = '0';
  item.style.padding = '0';
  item.style.overflow = 'hidden';
  setTimeout(function () { item.remove(); }, 300);
  showToast('Chat deleted');
}

function cancelDeleteSession(btn) {
  var item = btn.closest('.session-item');
  var confirm = item.querySelector('.si-del-confirm');
  if (confirm) confirm.remove();
  var actions = item.querySelector('.si-actions');
  if (actions) actions.style.display = '';
}

function togglePinSession(sessionId) {
  SessionManager.togglePin(sessionId);
  renderSessionList();
}

function clearAllSessions() {
  var activeId = SessionManager.data.activeSessionId;
  var others = SessionManager.data.sessions.filter(function (s) { return s.id !== activeId && SESSION_PRESET_IDS.indexOf(s.id) < 0; });
  if (others.length === 0) { showToast('Nothing to clear'); return; }
  SessionManager.clearAll(activeId);
  renderSessionList();
  showToast('All other chats cleared');
}

function fillInput(text) {
  const inp = document.getElementById('chatInput');
  inp.value = text;
  inp.focus();
  const i = text.lastIndexOf('  ');
  if (i >= 0) inp.setSelectionRange(i + 1, i + 1);
  else if (text.endsWith(' ')) inp.setSelectionRange(inp.value.length, inp.value.length);
}

function smartAction(type) {
  const ctx = currentContext;
  const hasInstance = !!ctx.instanceId;
  const hasTask = !!ctx.taskName;
  switch(type) {
    case 'patrol':
      simulateSendWithText('Any anomalies in today\'s runs');
      break;
    case 'diagnose':
      if (hasInstance) fillInput('Diagnose instance ' + ctx.instanceId);
      else fillInput('Diagnose instance ');
      break;
    case 'syslog':
      if (hasInstance) {
        linkTo('view-syslog', null, {taskName: ctx.taskName, instanceId: ctx.instanceId});
      } else fillInput('View instance  logs');
      break;
    case 'rerun':
      if (hasInstance) fillInput('Rerun instance ' + ctx.instanceId);
      else fillInput('Rerun instance ');
      break;
    case 'dependency':
      if (hasInstance) simulateSendWithText('View dependency for instance ' + ctx.instanceId);
      else if (hasTask) simulateSendWithText('View dependency for task ' + ctx.taskName);
      else fillInput('View dependency for task ');
      break;
  }
}

function toggleFloat() {
  const p = document.getElementById('agentPanel');
  const btn = document.getElementById('dockBtn');
  isFloating = !isFloating;
  p.classList.toggle('floating', isFloating);
  if (isFloating) {
    const r = p.getBoundingClientRect();
    p.style.left = r.left + 'px';
    p.style.top = r.top + 'px';
    p.style.right = 'auto';
  } else {
    p.style.left = '';
    p.style.top = '';
    p.style.right = '';
  }
  if (btn) btn.textContent = isFloating ? '⇤ Dock' : '⇄ Float';
}

document.getElementById('apHeaderDrag').addEventListener('mousedown', function(e) {
  if (e.target.closest('.ap-btn,.dock-btn')) return;
  floatDrag.on = true;
  floatDrag.moved = false;
  const r = document.getElementById('agentPanel').getBoundingClientRect();
  floatDrag.dx = e.clientX - r.left;
  floatDrag.dy = e.clientY - r.top;
  floatDrag.startX = e.clientX;
  floatDrag.startY = e.clientY;
  e.preventDefault();
});

document.addEventListener('mousemove', function(e) {
  if (!floatDrag.on) return;
  var dist = Math.abs(e.clientX - floatDrag.startX) + Math.abs(e.clientY - floatDrag.startY);
  if (dist > 8) floatDrag.moved = true;
  if (!floatDrag.moved) return;
  var p = document.getElementById('agentPanel');
  if (!isFloating) {
    isFloating = true;
    p.classList.add('floating');
    var btn = document.getElementById('dockBtn');
    if (btn) btn.textContent = '⇤ Dock';
  }
  p.style.left = e.clientX - floatDrag.dx + 'px';
  p.style.top = e.clientY - floatDrag.dy + 'px';
  p.style.right = 'auto';
});

document.addEventListener('mouseup', function(e) {
  if (floatDrag.on && floatDrag.moved && isFloating) {
    var winW = window.innerWidth;
    var p = document.getElementById('agentPanel');
    var pr = p.getBoundingClientRect();
    if (pr.right >= winW - 10 && pr.top <= 58) {
      isFloating = false;
      p.classList.remove('floating');
      p.style.left = '';
      p.style.top = '';
      p.style.right = '';
      var btn = document.getElementById('dockBtn');
      if (btn) btn.textContent = '⇄ Float';
    }
  }
  floatDrag.on = false;
});

(function initResize() {
  const h = document.getElementById('resizeHandle');
  const p = document.getElementById('agentPanel');
  if (!h || !p) return;
  h.addEventListener('mousedown', function(e) {
    resizeDrag.on = true;
    resizeDrag.startX = e.clientX;
    resizeDrag.startW = p.offsetWidth;
    e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!resizeDrag.on) return;
    const delta = resizeDrag.startX - e.clientX;
    let w = resizeDrag.startW + delta;
    w = Math.max(340, Math.min(700, w));
    p.style.width = w + 'px';
    p.style.minWidth = w + 'px';
  });
  document.addEventListener('mouseup', function() { resizeDrag.on = false; });
})();

function handleInputKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); simulateSend(); return; }
  const inp = document.getElementById('chatInput');
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (inputHistory.length === 0) return;
    if (inputHistoryIdx < inputHistory.length - 1) inputHistoryIdx++;
    inp.value = inputHistory[inputHistory.length - 1 - inputHistoryIdx];
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (inputHistoryIdx > 0) {
      inputHistoryIdx--;
      inp.value = inputHistory[inputHistory.length - 1 - inputHistoryIdx];
    } else {
      inputHistoryIdx = -1;
      inp.value = '';
    }
  }
}

function extractEntities(text) {
  const e = {};
  const instMatch = text.match(/di_scheduler\.[a-zA-Z0-9_]+/g);
  if (instMatch) {
    const full = instMatch.find(s => /_DAY_\d+$/.test(s));
    e.instanceId = full || instMatch[instMatch.length - 1];
  }
  let tm = text.match(/(?:对任务|for task)\s*([\w_.]+)/i);
  if (tm) { e.taskName = tm[1].replace(/\./g, '_'); if (TASKS[e.taskName]) return e; }
  tm = text.match(/(?:任务|task)\s*([\w_.]+)/i);
  if (tm) { e.taskName = tm[1].replace(/\./g, '_'); if (TASKS[e.taskName]) return e; }
  const normalized = text.replace(/\./g, '_');
  const taskNames = Object.keys(TASKS);
  for (var i = 0; i < taskNames.length; i++) {
    if (normalized.indexOf(taskNames[i]) >= 0 || text.indexOf(taskNames[i]) >= 0) { e.taskName = taskNames[i]; break; }
  }
  return e;
}

function resolveContext(text, entities, intent) {
  var resolvedIntent = intent || {};
  var currentInstTask = currentContext.instanceId && INSTANCES[currentContext.instanceId] ? INSTANCES[currentContext.instanceId].task : null;
  if (entities.taskName) {
    var isSkipTargetTask = resolvedIntent.type === 'op_skip_dep' && currentContext.instanceId && entities.taskName !== currentInstTask;
    if (!isSkipTargetTask) currentContext.taskName = entities.taskName;
  }
  if (entities.instanceId) {
    var isSkipTargetInstance = resolvedIntent.type === 'op_skip_dep' && currentContext.instanceId && entities.instanceId !== currentContext.instanceId;
    if (!isSkipTargetInstance) currentContext.instanceId = entities.instanceId;
    const inf = INSTANCES[currentContext.instanceId || entities.instanceId];
    if (inf) currentContext.taskName = inf.task;
  }
}

function classifyIntent(text) {
  if (/你能做什么|你的功能|你能帮我|你可以做|你会什么|介绍.*功能|功能.*介绍|你有什么能力|能力.*介绍|支持.*运维操作|运维操作.*支持|使用帮助|怎么用|如何使用|支持.*能力|能力.*支持|支持.*什么|what can you do|your capabilities|what do you support|help|usage guide|capability.*(intro|overview|list)|what.*capabilities|capabilities.*what|what features|introduce yourself|what are you/i.test(text)) return { type: 'capability_intro' };
  if (/哪些.*失败|失败.*哪些|失败.*任务|失败.*实例|运行失败|which.*failed|failed.*which|failed.*task|failed.*instance/i.test(text) && !/为什么|诊断|分析|why|diagnos|analyz/i.test(text)) return { type: 'search_instances', filter: 'Failed' };
  if (/哪些.*异常|异常.*实例|异常.*任务|有问题.*实例|问题.*任务|which.*abnormal|abnormal.*instance|problem.*instance/i.test(text)) return { type: 'search_instances', filter: 'abnormal' };
  if (/哪些.*等待|等待.*实例|等待.*任务|which.*waiting|waiting.*instance/i.test(text)) return { type: 'search_instances', filter: 'Waiting' };
  if (/哪些.*运行中|运行中.*实例|正在运行|which.*running|running.*instance/i.test(text)) return { type: 'search_instances', filter: 'Running' };
  if (/哪些.*成功|成功.*实例|which.*success|successful.*instance/i.test(text)) return { type: 'search_instances', filter: 'Successful' };
  if (/高优.*任务|优先级.*高|高优先级|重要.*任务|high.*priority|priority.*high|哪些.*高优/i.test(text)) return { type: 'search_tasks', filter: 'high_priority' };
  if (/低优.*任务|优先级.*低|低优先级|low.*priority|priority.*low|哪些.*低优/i.test(text)) return { type: 'search_tasks', filter: 'low_priority' };
  var priMatch = text.match(/(?:优先级|priority).*?(\d)/i);
  if (priMatch && /(?:任务|\btask\b)/i.test(text)) return { type: 'search_tasks', filter: 'priority_' + priMatch[1] };
  if (/所有任务|任务列表|任务有哪些|有哪些任务|all tasks|task list|list.*tasks/i.test(text)) return { type: 'search_tasks', filter: 'all' };
  if (/巡检|概览|今日运行|inspect|overview|today.*run/i.test(text)) return { type: 'patrol' };
  if (/运行情况|有什么异常|run.*status|any.*anomal/i.test(text) && !/任务|实例|di_scheduler|[a-z_]{3,}/.test(text)) return { type: 'patrol' };
  if (/资源|内存|cpu|shuffle|磁盘/i.test(text) && /分析|报表|对比|历史|analysis|report|compare|history/i.test(text)) return { type: 'diagnosis_resource', level: 'instance' };
  if (/失败|报错|异常|OOM|error|出错|failure|fail\b/i.test(text) && (/实例|di_scheduler|\binstance\b/i.test(text))) return { type: 'diagnosis_failure', level: 'instance' };
  if (/变慢|慢了|性能|运行.*(长|久|慢)|slow|performance|running.*long/i.test(text)) return { type: 'diagnosis_slow', level: 'instance' };
  if (/等待|waiting|阻塞|卡住|一直没跑|wait|block|stuck|not running/i.test(text)) return { type: 'diagnosis_waiting', level: 'instance' };
  if (/资源|内存|cpu|磁盘|resource/i.test(text) && /高|多|占用|使用/.test(text)) return { type: 'diagnosis_resource', level: 'instance' };
  if (/诊断|分析|为什么|出了什么问题|diagnos|analyz|why|what went wrong/i.test(text) && (/实例|di_scheduler|\binstance\b/i.test(text))) return { type: 'diagnosis_auto', level: 'instance' };
  if (/诊断|分析|diagnos|analyz/i.test(text)) return { type: 'diagnosis_auto', level: 'instance' };
  if (/跳过.*依赖|skip.*dep|忽略.*依赖|依赖.*跳过|依赖.*忽略/i.test(text)) return { type: 'op_skip_dep', level: 'instance' };
  if (/依赖|上游|下游|dependenc|upstream|downstream/i.test(text)) {
    if (/(?:任务|\btask\b)/i.test(text) && !/(?:实例|di_scheduler|\binstance\b)/i.test(text)) return { type: 'info_dependency', level: 'task' };
    if (/实例|di_scheduler|\binstance\b/i.test(text)) return { type: 'info_dependency', level: 'instance' };
    return { type: 'info_dependency' };
  }
  if (/代码|做什么|逻辑|sql|脚本|code|what does|logic/i.test(text)) return { type: 'info_code' };
  if (/重跑|rerun/i.test(text)) return { type: 'op_rerun', level: 'instance' };
  if (/补数据|backfill/i.test(text)) {
    var bfIntent = { type: 'op_backfill', level: 'task' };
    var today = new Date('2026-04-03');
    var cnNumMap = {'零':0,'一':1,'二':2,'两':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9,'十':10};
    function parseCnNum(s) {
      if (!s) return NaN;
      if (/^\d+$/.test(s)) return parseInt(s);
      if (cnNumMap[s] !== undefined) return cnNumMap[s];
      var m = s.match(/^([\u4e00-\u9fa5])?十([\u4e00-\u9fa5])?$/);
      if (m) return (m[1] ? cnNumMap[m[1]] || 1 : 1) * 10 + (m[2] ? cnNumMap[m[2]] || 0 : 0);
      return NaN;
    }
    var daysMatch = text.match(/过去([零一二两三四五六七八九十\d]+)天|最近([零一二两三四五六七八九十\d]+)天|([零一二两三四五六七八九十\d]+)天.*补|past\s+(\d+)\s+days|last\s+(\d+)\s+days|recent\s+(\d+)\s+days|(\d+)\s+days.*backfill/i);
    if (daysMatch) {
      var dEn = daysMatch[4] || daysMatch[5] || daysMatch[6] || daysMatch[7];
      var d = dEn ? parseInt(dEn, 10) : parseCnNum(daysMatch[1] || daysMatch[2] || daysMatch[3]);
      if (d && d > 0) {
        var startD = new Date(today);
        startD.setDate(startD.getDate() - d + 1);
        bfIntent.startDate = startD.toISOString().slice(0, 10);
        bfIntent.endDate = today.toISOString().slice(0, 10);
        bfIntent.days = d;
      }
    }
    var weekMatch = text.match(/过去([零一二两三四五六七八九十\d]+)周|最近([零一二两三四五六七八九十\d]+)周|([零一二两三四五六七八九十\d]+)周|past\s+(\d+)\s+weeks|last\s+(\d+)\s+weeks|recent\s+(\d+)\s+weeks|(\d+)\s+weeks/i);
    if (!daysMatch && weekMatch) {
      var wEn = weekMatch[4] || weekMatch[5] || weekMatch[6] || weekMatch[7];
      var w = wEn ? parseInt(wEn, 10) : parseCnNum(weekMatch[1] || weekMatch[2] || weekMatch[3]);
      if (w && w > 0) {
        var startW = new Date(today);
        startW.setDate(startW.getDate() - w * 7 + 1);
        bfIntent.startDate = startW.toISOString().slice(0, 10);
        bfIntent.endDate = today.toISOString().slice(0, 10);
        bfIntent.days = w * 7;
      }
    }
    var dateRangeMatch = text.match(/(\d{4}[-\/]\d{1,2}[-\/]\d{1,2})\s*(?:[~到至\-]|\s+to\s+)\s*(\d{4}[-\/]\d{1,2}[-\/]\d{1,2})/i);
    if (dateRangeMatch) {
      bfIntent.startDate = dateRangeMatch[1].replace(/\//g, '-');
      bfIntent.endDate = dateRangeMatch[2].replace(/\//g, '-');
      var ds = new Date(bfIntent.startDate), de = new Date(bfIntent.endDate);
      bfIntent.days = Math.round((de - ds) / 86400000) + 1;
    }
    return bfIntent;
  }
  if (/冻结|freeze/i.test(text) && !/解冻|unfreeze/i.test(text)) return { type: 'op_freeze', level: 'task' };
  if (/解冻|unfreeze/i.test(text)) return { type: 'op_unfreeze', level: 'task' };
  if (/调整.*优先级|优先级.*调|修改.*优先级|优先级.*修改|设置.*优先级|优先级.*设置|更改.*优先级|变更.*优先级|提高.*优先级|降低.*优先级|change.*priority|set.*priority|adjust.*priority|modify.*priority|update.*priority|raise.*priority|lower.*priority/i.test(text)) return { type: 'op_priority', level: 'task' };
  if (/查.*优先级|优先级.*是多少|优先级.*查|优先级.*什么|what('s| is).*priority|priority.*(is|what|of)/i.test(text)) return { type: 'info_priority' };
  if (/终止|kill|stop|terminate/i.test(text)) return { type: 'op_kill', level: 'instance' };
  if (/重试.*DQC|DQC.*重试|retry.*dqc|dqc.*retry/i.test(text)) return { type: 'op_dqc', level: 'instance' };
  if (/标记.*成功|置.*成功|mark.*success|set.*success/i.test(text)) return { type: 'op_mark_success', level: 'instance' };
  if (/立即触发|trigger.*now|immediate.*run|立即执行|马上跑/i.test(text)) return { type: 'op_trigger_now', level: 'task' };
  if (/告警|alarm/i.test(text)) return { type: 'op_alarm', level: 'task' };
  if (/删除|修改代码|变更权限|修改工作流|修改.*负责人|变更.*负责人|修改.*owner|更换.*负责人|转让|移交|修改.*调度|修改.*配置|新建.*任务|创建.*任务|上线|下线|delete|modify code|change permission|modify workflow|change owner|transfer|modify schedule|modify config|create task|publish|unpublish/i.test(text)) return { type: 'unsupported' };
  if (/血缘|lineage/i.test(text)) return { type: 'info_lineage' };
  if (/日志|syslog|system log|log summary|log\b/i.test(text)) return { type: 'info_syslog' };
  if (/查看.*优先级|优先级.*查看|priority.*\?|check.*priority/i.test(text)) return { type: 'info_priority' };
  return { type: 'general' };
}

function resourceBars() {
  return '<div class="resource-grid">' +
'<div class="resource-cell"><div class="rc-m-label">Memory</div><div class="rc-m-val">7.2 / 8 GB</div><div class="rc-m-bar"><div class="rc-m-fill" style="width:90%;background:#FA8C16;"></div></div></div>' +
'<div class="resource-cell"><div class="rc-m-label">CPU</div><div class="rc-m-val">avg 68%</div><div class="rc-m-bar"><div class="rc-m-fill" style="width:68%;background:#1890FF;"></div></div></div>' +
'<div class="resource-cell"><div class="rc-m-label">Shuffle Read</div><div class="rc-m-val">9.1 GB</div><div class="rc-m-bar"><div class="rc-m-fill" style="width:72%;background:#1890FF;"></div></div></div>' +
'<div class="resource-cell"><div class="rc-m-label">Disk Spill</div><div class="rc-m-val">120 MB</div><div class="rc-m-bar"><div class="rc-m-fill" style="width:15%;background:#52C41A;"></div></div></div>' +
'</div><div class="rc-section" style="margin-top:8px;"><div class="rc-label">Compared with 7-day average</div><div class="rc-value">Memory peak +18%, Shuffle +24%, consistent with data volume +35%.</div></div>';
}

function genDiagnosisFailure(ctx) {
  const name = ctx.taskName || 'update_table';
  const inst = ctx.instanceId || 'di_scheduler.studio_6801187_20260403_DAY_2';
  const uid = 'dyn-r-' + Date.now();
  return '<div class="response-wrap">' +
'<div class="msg-bubble" style="border:none;background:transparent;padding:8px 14px 6px;">Analyzed instance <strong>' + inst + '</strong> (task ' + name + '), this instance has failed.</div>' +
'<div class="r-card"><div class="r-card-h"><div class="r-card-ico" style="background:#FFF1F0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4D4F" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg></div><span class="r-card-t">Root Cause</span></div><div class="r-card-b">' +
'<div class="rc-section"><div class="rc-label">Error Type</div><span class="rc-error-type">OutOfMemoryError（OOM）</span></div>' +
'<div class="rc-section" style="margin-bottom:0;"><div class="rc-label">Direct Cause</div><div class="rc-value">Executor memory limit <strong>8GB</strong> exceeded (peak <strong>8.1GB</strong>), YARN Kill Container; <strong>COLLECT_LIST</strong> causes data skew on hot keys.</div></div>' +
'</div></div>' +
'<div class="r-card" style="margin-top:0;border-top:1px solid #F0F0F0;"><div class="r-card-h"><div class="r-card-ico" style="background:#F0F2F5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div><span class="r-card-t">Fix Suggestions</span></div><div class="r-card-b"><div class="rc-suggestions">' +
'<div class="rc-sug-item"><span><code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">spark.executor.memory</code> Current <strong>8g</strong> → Recommended <strong>12g</strong></span><button type="button" class="apply-btn" onclick="applyFix(this,\'spark.executor.memory\',\'12g\')">Apply</button></div>' +
'<div class="rc-sug-item"><span><code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">spark.sql.shuffle.partitions</code> Current <strong>200</strong> → Recommended <strong>320</strong>, reduce data volume per partition</span><button type="button" class="apply-btn" onclick="applyFix(this,\'spark.sql.shuffle.partitions\',\'320\')">Apply</button></div>' +
'<div class="rc-sug-item"><span>Hot key: <strong>user_id=928173</strong> (~2.3GB), recommend salting / two-phase aggregation for COLLECT_LIST</span><button type="button" class="apply-btn" onclick="linkTo(\'view-code\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'},true)" style="background:#FAFBFC;border-color:#D9DDE3;color:#1890FF;">View Code</button></div>' +
'</div></div></div>' +
'<div class="resp-section" style="background:#fff;"><div class="rc-label" style="margin-bottom:6px;">Optimized SQL Example (salting)</div>' +
'<div class="code-block"><div class="cb-header"><span>Spark SQL</span><div class="cb-actions"><button type="button" class="cb-act" onclick="copyCode(this)">Copy</button><button type="button" class="cb-act" onclick="insertCode(this)">Insert to Editor</button></div></div>' +
'<pre class="cb-code"><span class="cm">-- salting mitigates COLLECT_LIST skew</span>\n<span class="kw">WITH</span> salted <span class="kw">AS</span> (\n  <span class="kw">SELECT</span> <span class="fn">concat</span>(<span class="kw">cast</span>(user_id <span class="kw">AS STRING</span>), <span class="str">\'_\'</span>, <span class="fn">cast</span>(<span class="fn">floor</span>(<span class="fn">rand</span>() * <span class="num">8</span>) <span class="kw">AS STRING</span>)) <span class="kw">AS</span> user_salt,\n         order_id, amt, ...\n  <span class="kw">FROM</span> ods_raw_order_data\n  <span class="kw">WHERE</span> dt = <span class="str">\'2026-04-03\'</span>\n)\n<span class="kw">SELECT</span> user_id, <span class="fn">collect_list</span>(<span class="fn">struct</span>(order_id, amt)) ...\n<span class="kw">FROM</span> salted\n<span class="kw">GROUP BY</span> user_salt;</pre></div></div>' +
'<div class="resp-section" style="border-bottom:none;"><div class="link-btns">' +
'<button type="button" class="link-btn" onclick="triggerDynRerun(\'' + uid + '\',\'' + name + '\',\'' + inst + '\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg>Rerun This Instance</button>' +
'<button type="button" class="link-btn" onclick="linkTo(\'view-syslog\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>View System Log</button>' +
'<button type="button" class="link-btn" onclick="linkTo(\'view-code\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'},true)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M16 18l2-2-2-2M8 18l-2-2 2-2M14 4l-4 16"/></svg>View Code</button>' +
'<button type="button" class="link-btn" onclick="linkTo(\'view-detail\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>View Instance Details</button>' +
'</div></div></div>';
}

function genDiagnosisSlow(ctx) {
  const name = ctx.taskName || 'sync_user_data';
  const inst = ctx.instanceId || 'di_scheduler.studio_8050119_20260403_DAY_1';
  return '<div class="response-wrap">' +
'<div class="msg-bubble" style="border:none;background:transparent;padding:8px 14px 6px;">Instance <strong>' + inst + '</strong> (' + name + ') has abnormally long runtime, currently still <span class="status-badge running">Running</span>.</div>' +
'<div class="r-card"><div class="r-card-h"><div class="r-card-ico" style="background:#FFF7E6"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FA8C16" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><span class="r-card-t">Runtime Analysis</span></div><div class="r-card-b">' +
'<div class="rc-section"><div class="rc-label">Runtime Comparison</div><div class="rc-value">Currently running <strong>77min</strong>, 7-day average <strong>32min</strong> (<strong style="color:#FF4D4F">+140%</strong> slower)</div></div>' +
'<div class="rc-section" style="margin-bottom:0;"><div class="rc-label">Bottleneck</div><div class="rc-value">Shuffle Write grew from 4.2GB to <strong>7.8GB</strong> (+86%), data volume growth ~35%, but Shuffle growth far exceeds data growth, possibly due to insufficient partitions causing spill. No OOM or errors detected.</div></div>' +
'</div></div>' +
'<div class="r-card" style="margin-top:0;border-top:1px solid #F0F0F0;"><div class="r-card-h"><div class="r-card-ico" style="background:#F0F2F5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div><span class="r-card-t">Optimization Suggestions</span></div><div class="r-card-b"><div class="rc-suggestions">' +
'<div class="rc-sug-item"><span><code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">spark.sql.shuffle.partitions</code> Current 200 → Recommended <strong>400</strong></span><button type="button" class="apply-btn" onclick="applyFix(this,\'spark.sql.shuffle.partitions\',\'400\')">Apply</button></div>' +
'<div class="rc-sug-item"><span>Check broadcast threshold <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">autoBroadcastJoinThreshold</code>; small table JOINs can use broadcast</span></div>' +
'</div></div></div>' +
'<div class="resp-section">' + resourceBars() + '</div>' +
'<div class="resp-section" style="border-bottom:none;"><div class="link-btns">' +
'<button type="button" class="link-btn" onclick="simulateSendWithText(\'Kill instance ' + inst + '\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l6 6M15 9l-6 6"/></svg>Kill This Instance</button>' +
'<button type="button" class="link-btn" onclick="triggerDynRerun(\'' + ('dyn-s-' + Date.now()) + '\',\'' + name + '\',\'' + inst + '\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg>Kill and Rerun</button>' +
'<button type="button" class="link-btn" onclick="linkTo(\'view-syslog\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>View System Log</button>' +
'<button type="button" class="link-btn" onclick="linkTo(\'view-code\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'},true)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M16 18l2-2-2-2M8 18l-2-2 2-2M14 4l-4 16"/></svg>View Code</button>' +
'<button type="button" class="link-btn" onclick="linkTo(\'view-detail\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>View Instance Details</button>' +
'</div></div></div>';
}

function genDiagnosisWaiting(ctx) {
  const name = ctx.taskName || 'dwd_payment_detail';
  const inst = ctx.instanceId || 'di_scheduler.studio_3301987_20260403_DAY_1';
  var upstreamName, upstreamInst, upstreamStatus, upstreamBadge, reason;
  if (name === 'dws_order_summary_daily' || inst.indexOf('studio_5512380') >= 0) {
    upstreamName = 'update_table';
    upstreamInst = 'di_scheduler.studio_6801187_20260403_DAY_2';
    upstreamStatus = 'Failed';
    upstreamBadge = '<span class="status-badge failed">Failed</span>';
    reason = 'Upstream task <strong>' + upstreamName + '</strong> instance <code style="background:#f5f5f5;padding:2px 4px;border-radius:3px;">' + upstreamInst + '</code> status is ' + upstreamBadge + ' (OOM), blocking current instance from scheduling.';
  } else {
    upstreamName = 'sync_user_data';
    upstreamInst = 'di_scheduler.studio_8050119_20260403_DAY_1';
    upstreamStatus = 'Running';
    upstreamBadge = '<span class="status-badge running">Running</span>';
    reason = 'Upstream task <strong>' + upstreamName + '</strong> instance <code style="background:#f5f5f5;padding:2px 4px;border-radius:3px;">' + upstreamInst + '</code> still ' + upstreamBadge + ' (running 77min, usually 32min), causing current instance to wait over <strong>2h</strong>.';
  }
  ctx.skipDependency = {
    blockerTaskName: upstreamName,
    blockerInstanceId: upstreamInst,
    blockerStatus: upstreamStatus
  };
  var suggestion = upstreamStatus === 'Failed'
    ? '<div class="rc-sug-item"><span>Fix upstream ' + upstreamName + ' issue first, then rerun; current instance will be triggered automatically</span></div>' +
      '<div class="rc-sug-item"><span>If upstream data is not required or has alternatives, you can <strong>skip dependency</strong> and execute current instance directly</span></div>'
    : '<div class="rc-sug-item"><span>Upstream is running, recommend waiting for completion; if timeout is severe, contact upstream owner to investigate</span></div>' +
      '<div class="rc-sug-item"><span>If current task is urgent and can tolerate missing upstream data, <strong>skip dependency</strong> to force execute</span></div>';
  return '<div class="response-wrap">' +
'<div class="msg-bubble" style="border:none;background:transparent;padding:8px 14px 6px;">Instance <strong>' + inst + '</strong> (' + name + ') is continuously waiting.</div>' +
'<div class="r-card"><div class="r-card-h"><div class="r-card-ico" style="background:#FFF7E6"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D46B08" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><span class="r-card-t">Wait Reason</span></div><div class="r-card-b">' +
'<div class="rc-value">' + reason + '</div>' +
'</div></div>' +
'<div class="r-card" style="margin-top:0;border-top:1px solid #F0F0F0;"><div class="r-card-h"><div class="r-card-ico" style="background:#F0F2F5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div><span class="r-card-t">Suggestions</span></div><div class="r-card-b"><div class="rc-suggestions">' + suggestion +
'</div></div></div>' +
'<div class="resp-section" style="border-bottom:none;"><div class="link-btns">' +
'<button type="button" class="link-btn" onclick="simulateSendWithText(\'Diagnose instance ' + upstreamInst + '\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>Diagnose Upstream Instance</button>' +
'<button type="button" class="link-btn" onclick="navToInstance(\'' + upstreamInst + '\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>View Upstream Instance</button>' +
'<button type="button" class="link-btn" onclick="simulateSendWithText(\'Skip dependency instance ' + inst + '\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>Skip Dependency</button>' +
'<button type="button" class="link-btn" onclick="linkTo(\'view-instance-lineage\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>View Instance Lineage</button>' +
'<button type="button" class="link-btn" onclick="linkTo(\'view-detail\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>View Instance Details</button>' +
'</div></div></div>';
}

function genDiagnosisResource(ctx) {
  const inst = ctx.instanceId || currentContext.instanceId || 'di_scheduler.studio_6801187_20260403_DAY_2';
  const name = ctx.taskName || currentContext.taskName || 'update_table';
  return '<div class="response-wrap">' +
'<div class="msg-bubble" style="border:none;background:transparent;padding:8px 14px 6px;">Instance <strong>' + inst + '</strong> (' + name + ') resource usage analysis:</div>' +
'<div class="resp-section">' + resourceBars() + '</div></div>';
}

function buildDepItems(items, totalCount, direction) {
  var COLLAPSE_THRESHOLD = 10;
  var INITIAL_SHOW = 5;
  if (totalCount <= COLLAPSE_THRESHOLD) return items;
  var uid = 'dep-' + direction + '-' + Date.now();
  var allItems = items;
  var shownPart = '';
  var hiddenPart = '';
  var tmpDiv = document.createElement('div');
  tmpDiv.innerHTML = allItems;
  var children = tmpDiv.querySelectorAll('.dep-item');
  children.forEach(function(child, i) {
    if (i < INITIAL_SHOW) shownPart += child.outerHTML;
    else hiddenPart += child.outerHTML;
  });
  var remaining = totalCount - INITIAL_SHOW;
  return shownPart +
    '<div id="' + uid + '-hidden" style="display:none;">' + hiddenPart + '</div>' +
    '<div id="' + uid + '-toggle" class="dep-expand-btn" onclick="var h=document.getElementById(\'' + uid + '-hidden\');var t=document.getElementById(\'' + uid + '-toggle\');if(h.style.display===\'none\'){h.style.display=\'\';t.innerHTML=\'<svg width=\\\'12\\\' height=\\\'12\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' stroke=\\\'currentColor\\\' stroke-width=\\\'2\\\'><path d=\\\'M18 15l-6-6-6 6\\\'/></svg> Collapse\';}else{h.style.display=\'none\';t.innerHTML=\'<svg width=\\\'12\\\' height=\\\'12\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' stroke=\\\'currentColor\\\' stroke-width=\\\'2\\\'><path d=\\\'M6 9l6 6 6-6\\\'/></svg> Show remaining ' + remaining + ' items\';}">' +
    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg> Show remaining ' + remaining + ' items</div>';
}

function genInfoDependency(ctx, level) {
  const name = ctx.taskName || 'update_table';
  const inst = ctx.instanceId;
  const dep = DEPS[name] || { up: [], down: [] };
  var useInstance = (level === 'instance') || (inst && level !== 'task');
  if (useInstance && inst) {
    var upCount = 0;
    var upItems = dep.up.map(function(u) {
      var uInsts = Object.entries(INSTANCES).filter(function(e) { return e[1].task === u; });
      if (uInsts.length === 0) return '';
      upCount += uInsts.length;
      return uInsts.map(function(e) {
        return '<div class="dep-item"><span class="dep-name" onclick="navToInstance(\'' + e[0] + '\')">' + e[0] + '</span><span class="dep-meta">' + u + '</span></div>';
      }).join('');
    }).join('');
    var downCount = 0;
    var downItems = dep.down.map(function(d) {
      var dInsts = Object.entries(INSTANCES).filter(function(e) { return e[1].task === d; });
      if (dInsts.length === 0) return '';
      downCount += dInsts.length;
      return dInsts.map(function(e) {
        return '<div class="dep-item"><span class="dep-name" onclick="navToInstance(\'' + e[0] + '\')">' + e[0] + '</span><span class="dep-meta">' + d + '</span></div>';
      }).join('');
    }).join('');
    upItems = buildDepItems(upItems, upCount, 'up');
    downItems = buildDepItems(downItems, downCount, 'down');
    var groups = '';
    if (upCount > 0) groups += '<div class="dep-group"><div class="dep-group-title"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FA8C16" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg> Upstream Dependencies (' + upCount + ' instance(s))</div>' + upItems + '</div>';
    if (downCount > 0) groups += '<div class="dep-group" style="margin-bottom:0;"><div class="dep-group-title"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg> Downstream Dependencies (' + downCount + ' instance(s))</div>' + downItems + '</div>';
    if (!groups) groups = '<div class="dep-item"><span class="dep-meta">No upstream or downstream dependencies</span></div>';
    var totalDeps = upCount + downCount;
    var summaryNote = totalDeps > 10 ? '<div style="font-size:11px;color:#8C8C8C;margin-top:6px;">Showing summary; use lineage view for the full dependency graph.</div>' : '';
    return '<div class="response-wrap"><div class="msg-bubble" style="border:none;background:transparent;padding:0 0 8px;">Instance <strong>' + inst + '</strong> (<code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">' + name + '</code>) instance-level dependencies are as follows:</div>' +
'<div class="r-card"><div class="r-card-b" style="padding:14px;">' + groups + summaryNote + '</div></div>' +
'<div class="resp-section" style="border-bottom:none;"><div class="link-btns"><button type="button" class="link-btn" onclick="linkTo(\'view-instance-lineage\',null,{taskName:\'' + name + '\',instanceId:\'' + inst + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>View Instance Lineage</button></div></div></div>';
  }
  const t = TASKS[name] || TASKS.update_table;
  var upHtml = dep.up.map(function(u) {
    var ut = TASKS[u] || {};
    return '<div class="dep-item"><span class="dep-name" onclick="navToTask(\'' + u + '\')">' + u + '</span><span class="dep-meta">Daily · ' + (ut.code || '').replace('di_scheduler.','') + '</span></div>';
  }).join('');
  var downHtml = dep.down.map(function(d) {
    var dt = TASKS[d] || {};
    return '<div class="dep-item"><span class="dep-name" onclick="navToTask(\'' + d + '\')">' + d + '</span><span class="dep-meta">Daily · ' + (dt.code || '').replace('di_scheduler.','') + '</span></div>';
  }).join('');
  upHtml = buildDepItems(upHtml, dep.up.length, 'taskup');
  downHtml = buildDepItems(downHtml, dep.down.length, 'taskdown');
  var groups = '';
  if (dep.up.length > 0) groups += '<div class="dep-group"><div class="dep-group-title"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FA8C16" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg> Upstream Dependencies (' + dep.up.length + ' task(s))</div>' + upHtml + '</div>';
  if (dep.down.length > 0) groups += '<div class="dep-group" style="margin-bottom:0;"><div class="dep-group-title"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg> Downstream Dependencies (' + dep.down.length + ' task(s))</div>' + downHtml + '</div>';
  if (!groups) groups = '<div class="dep-item"><span class="dep-meta">No upstream or downstream dependencies</span></div>';
  var totalDeps = dep.up.length + dep.down.length;
  var summaryNote = totalDeps > 10 ? '<div style="font-size:11px;color:#8C8C8C;margin-top:6px;">Showing summary; use lineage view for the full dependency graph.</div>' : '';
  return '<div class="response-wrap"><div class="msg-bubble" style="border:none;background:transparent;padding:0 0 8px;">Task <strong>' + name + '</strong> (<code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">' + (t.code || '') + '</code>) task-level dependencies (' + totalDeps + ' total):</div>' +
'<div class="r-card"><div class="r-card-b" style="padding:14px;">' + groups + summaryNote + '</div></div>' +
'<div class="resp-section" style="border-bottom:none;"><div class="link-btns"><button type="button" class="link-btn" onclick="linkTo(\'view-lineage\',null,{taskName:\'' + name + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>View Task Lineage</button></div></div></div>';
}

var TASK_CODE_SUMMARIES = {
  update_table: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Read same-day orders from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.raw_order_data</code><br>2. JOIN <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.product_catalog</code> for product attributes<br>3. JOIN <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dim.user_info</code> to enrich user dimensions<br>4. <strong>COLLECT_LIST</strong> aggregates order lines per user<br>5. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dwd.order_detail</code> partitions<br><br>Main bottleneck: Shuffle from COLLECT_LIST and wide-table JOINs.',
  sync_user_data: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Read user profiles from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.user_profile</code><br>2. LEFT JOIN last 30 days of <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.raw_order_data</code> to count orders<br>3. Use <strong>COALESCE</strong> for default values when users have no orders<br>4. Write to dimension table <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dim.user_info</code><br><br>Overall logic is straightforward; 30-day aggregation window; moderate data volume.',
  dwd_payment_detail: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Read payment events from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.payment_log</code><br>2. JOIN <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dim.user_info</code> for user country<br>3. Write to wide table partition <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dwd.payment_detail</code><br><br>Lightweight logic: single JOIN, no aggregation.',
  dws_order_summary_daily: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Read same-day detail from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dwd.order_detail</code><br>2. GROUP BY on three dimensions: <strong>date × country × category</strong><br>3. Compute aggregates: order count, GMV, buyer count, etc.<br>4. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dws.order_summary_daily</code><br><br>Typical summary-layer task; depends on DWD data readiness.',
  ods_raw_order_data: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Consume order events from Kafka source <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">kafka_source.order_events</code><br>2. Filter <strong>ORDER_CREATED</strong> events<br>3. Extract base order fields (order_id, user_id, product_id, amount, etc.)<br>4. Write to ODS <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.raw_order_data</code> daily partitions<br><br>Source ingestion task with simple logic; focus on source stability and timeliness.',
  dim_user_info: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Read user base data from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.user_profile</code><br>2. Filter active users with <strong>is_active = 1</strong><br>3. Extract dimension fields (username, country, VIP tier, verification status, etc.)<br>4. Write to dimension table <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dim.user_info</code> daily partitions<br><br>Dimension build task; no aggregation; moderate volume.',
  ods_product_catalog: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Pull product data from MySQL source <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">mysql_source.products</code><br>2. Incremental filter for same-day changes by <strong>update_time</strong><br>3. Extract product attributes (name, category, brand, price, stock, etc.)<br>4. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.product_catalog</code> daily partitions<br><br>Incremental sync; depends on external MySQL connectivity.',
  ads_order_report: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Read summary metrics from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dws.order_summary_daily</code><br>2. LEFT JOIN <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dwd.payment_detail</code> for refund data<br>3. Compute avg_order_value and refund_rate<br>4. Write to app layer <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.order_report</code> for BI consumption<br><br>App-layer report task; depends on DWS and DWD readiness.',
  etl_data_warehouse: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Multi-source JOIN: orders, users, products, clicks, ads<br>2. Build master summary table <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dw.master_summary</code><br>3. Heavy shuffle due to 5-way JOIN across large tables<br><br>Critical DW orchestration task with many upstream/downstream deps.',
  ods_click_stream: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Consume click events from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">kafka_source.click_events</code><br>2. Extract session/page/device fields<br>3. Write to ODS <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.click_stream</code><br><br>High-volume ingestion; focus on Kafka offset management.',
  ods_ad_impression: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Consume ad events from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">kafka_source.ad_events</code><br>2. Filter IMPRESSION events, extract bid/win prices<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.ad_impression</code><br><br>Standard ingestion; moderate volume.',
  ods_search_log: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Consume search events from Kafka<br>2. Extract query text, result count, click position, latency<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.search_log</code><br><br>Standard ingestion for search analytics.',
  dim_product_attr: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Read product catalog from ODS<br>2. Extract attribute fields (name, category, brand, rating)<br>3. Write to dimension table <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dim.product_attr</code><br><br>Simple dimension build; no aggregation.',
  dim_geo_region: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Pull region data from MySQL<br>2. Filter active regions<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dim.geo_region</code><br><br>Small dimension table; very fast execution.',
  dim_channel_info: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Pull marketing channel data from MySQL<br>2. Filter active channels<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">dim.channel_info</code><br><br>Small dimension table; very fast execution.',
  ods_refund_event: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Consume refund events from Kafka<br>2. Extract refund amount, reason, status<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.refund_event</code><br><br>Note: Schema changes in source can cause failures.',
  ods_coupon_usage: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Consume coupon events from Kafka<br>2. Filter USED actions<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.coupon_usage</code><br><br>Standard ingestion; filtered by action type.',
  ods_logistics_track: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Pull logistics data from external API<br>2. Extract tracking status, carrier, location<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.logistics_track</code><br><br>Depends on external API; slow responses can cause delays.',
  ods_inventory_snapshot: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Pull daily inventory from MySQL<br>2. Calculate available qty = stock - reserved<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.inventory_snapshot</code><br><br>Daily full snapshot; moderate data volume.',
  ads_user_retention: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Compute cohort-based retention rates<br>2. COUNT DISTINCT users per cohort × retention day<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.user_retention</code><br><br>Heavy aggregation; depends on DW readiness.',
  ads_funnel_analysis: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Compute conversion funnel metrics per step<br>2. COUNT DISTINCT sessions and users per funnel step<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.funnel_analysis</code><br><br>Moderate complexity; session-based aggregation.',
  ads_revenue_dashboard: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Aggregate gross/net revenue by country × category<br>2. Include refund deductions<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.revenue_dashboard</code><br><br>Finance-critical report; depends on DW master summary.',
  ads_cohort_weekly: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Weekly cohort analysis of user activity<br>2. Aggregate order count and active users per week offset<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.cohort_weekly</code><br><br>Standard analytics aggregation.',
  ads_churn_prediction: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Read ML model output for churn scores<br>2. Enrich with days since last order and frequency metrics<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.churn_prediction</code><br><br>ML pipeline output; depends on model training completion.',
  ads_ab_test_result: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Aggregate A/B test events by experiment × variant<br>2. Compute conversion rates and average metrics<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.ab_test_result</code><br><br>Experiment platform output; moderate volume.',
  ads_category_ranking: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Aggregate order metrics by category<br>2. Compute GMV rank using RANK() window function<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.category_ranking</code><br><br>Simple ranking aggregation.',
  ads_merchant_score: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Aggregate merchant performance metrics<br>2. Compute avg rating, order count, and overall score<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.merchant_score</code><br><br>Merchant scoring for platform quality.',
  ads_search_quality: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Analyze search quality from <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ods.search_log</code><br>2. Compute avg click position, CTR, query volume<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.search_quality</code><br><br>Search relevance metrics; depends on search log ingestion.',
  ads_realtime_monitor: 'This task runs <strong>Spark SQL</strong>. Core logic:<br><br>1. Aggregate real-time metrics from Kafka stream<br>2. Compute avg, max, P99 per service × metric<br>3. Write to <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">ads.realtime_monitor</code><br><br>SRE monitoring aggregation; time-sensitive.'
};

/* ========== ALARM POLICY DATA ========== */
const ALARM_POLICIES = [
  { id: 'ap_001', name: 'st_runtime_anomaly_v7', enabled: true, trigger: 'Runtime Anomaly Alert', channel: 'Email, SeaTalk, Webhook', recipient: 'Task Owner', owner: 'yaochua.li@shopee.com', modified: '2026-03-24 17:07:44' },
  { id: 'ap_002', name: 'task failure with encrypted var', enabled: true, trigger: 'Task Failure', channel: 'Email', recipient: 'Task Owner, Others', owner: 'jiajian.chen@shopee.com', modified: '2026-03-24 15:31:44' },
  { id: 'ap_003', name: 'task success with encrypted var', enabled: true, trigger: 'Task Success', channel: 'Email', recipient: 'Task Owner, Others', owner: 'jiajian.chen@shopee.com', modified: '2026-03-24 15:31:35' },
  { id: 'ap_004', name: 'ddddddddddddddd', enabled: true, trigger: 'Runtime Anomaly Alert', channel: 'Email', recipient: 'Task Owner, Task Editor', owner: 'yaochua.li@shopee.com', modified: '2026-03-24 14:55:28' },
  { id: 'ap_005', name: 'anomaly_alarm_lw', enabled: true, trigger: 'Runtime Anomaly Alert', channel: 'SeaTalk', recipient: 'Task Owner, Task Editor', owner: 'wei.liang@shopee.com', modified: '2026-03-24 10:19:00' },
  { id: 'ap_006', name: 'e upstream task policy test 2', enabled: false, trigger: 'Upstream Task Failure', channel: 'Email', recipient: 'Task Owner, Others', owner: 'yaochua.li@shopee.com', modified: '2026-03-19 16:38:46' },
  { id: 'ap_007', name: 'failure_alert_for_jj', enabled: true, trigger: 'Task Failure', channel: 'SeaTalk', recipient: 'Task Owner, Task Editor', owner: 'jiajian.chen@shopee.com', modified: '2026-03-04 17:39:12' },
  { id: 'ap_008', name: 'Input Overtime', enabled: true, trigger: 'Input Overtime', channel: 'Email, SeaTalk', recipient: 'Task Owner', owner: 'wu.chen@shopee.com', modified: '2026-02-28 09:15:30' },
  { id: 'ap_009', name: 'Output Overtime', enabled: true, trigger: 'Output Overtime', channel: 'Email', recipient: 'Task Owner, Task Editor', owner: 'wu.chen@shopee.com', modified: '2026-02-25 14:22:18' },
  { id: 'ap_010', name: 'Running Duration Overtime', enabled: true, trigger: 'Running Duration Overtime', channel: 'SeaTalk', recipient: 'Task Owner', owner: 'data.team@shopee.com', modified: '2026-02-20 11:05:44' },
  { id: 'ap_011', name: 'test_success', enabled: true, trigger: 'Task Success', channel: 'Email', recipient: 'Task Owner', owner: 'data.team@shopee.com', modified: '2026-02-18 16:33:10' },
  { id: 'ap_012', name: 'Cascade rerun', enabled: true, trigger: 'Cascade Rerun', channel: 'Email, SeaTalk', recipient: 'Task Owner, Task Editor', owner: 'wu.chen@shopee.com', modified: '2026-02-15 08:45:22' },
  { id: 'ap_013', name: 'Task Failure', enabled: true, trigger: 'Task Failure', channel: 'Email, SeaTalk', recipient: 'Task Owner, Task Editor', owner: 'bryann.yeapkk@shopee.com', modified: '2026-02-10 10:30:00' }
];

const ALARM_TRIGGER_TYPES = [
  'Task Failure', 'Task Attempt Failure', 'Input Overtime', 'Output Overtime',
  'Running Duration Overtime', 'Task Success', 'Upstream Frequency Change',
  'Cascade Rerun', 'Upstream Task Failure', 'Runtime Anomaly Alert'
];

const TASK_ALARM_SETTINGS = {
  update_table: {
    'Task Failure': 'Task Failure',
    'Input Overtime': 'Input Overtime',
    'Output Overtime': 'Output Overtime',
    'Running Duration Overtime': 'Running Duration Overtime',
    'Task Success': 'test_success',
    'Cascade Rerun': 'Cascade rerun'
  },
  sync_user_data: {
    'Task Failure': 'failure_alert_for_jj',
    'Runtime Anomaly Alert': 'anomaly_alarm_lw'
  },
  dwd_payment_detail: {
    'Task Failure': 'Task Failure',
    'Running Duration Overtime': 'Running Duration Overtime'
  },
  ods_raw_order_data: {
    'Task Failure': 'task failure with encrypted var',
    'Input Overtime': 'Input Overtime'
  },
  dim_user_info: {
    'Task Failure': 'Task Failure',
    'Task Success': 'task success with encrypted var'
  },
  ods_product_catalog: {
    'Task Failure': 'failure_alert_for_jj',
    'Output Overtime': 'Output Overtime',
    'Upstream Task Failure': 'e upstream task policy test 2'
  },
  dws_order_summary_daily: {
    'Task Failure': 'Task Failure',
    'Running Duration Overtime': 'Running Duration Overtime',
    'Runtime Anomaly Alert': 'st_runtime_anomaly_v7'
  },
  ads_order_report: {
    'Task Failure': 'Task Failure',
    'Output Overtime': 'Output Overtime',
    'Cascade Rerun': 'Cascade rerun'
  }
};

function genSearchInstances(filter) {
  var results = [];
  Object.entries(INSTANCES).forEach(function(e) {
    var id = e[0], inst = e[1];
    if (filter === 'abnormal') {
      if (inst.status === 'Failed' || inst.status === 'Running' || inst.status === 'Waiting') results.push({ id: id, inst: inst });
    } else {
      if (inst.status === filter) results.push({ id: id, inst: inst });
    }
  });
  var filterLabel = filter === 'abnormal' ? 'abnormal' : filter === 'Failed' ? 'failed' : filter === 'Waiting' ? 'waiting' : filter === 'Running' ? 'running' : 'successful';
  var badgeClass = filter === 'Failed' ? 'failed' : filter === 'Running' ? 'running' : filter === 'Waiting' ? 'waiting' : 'success';
  if (filter === 'abnormal') badgeClass = '';
  if (results.length === 0) {
    return '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">No results found: no ' + filterLabel + ' instances today.</div></div>';
  }
  var rows = results.map(function(r) {
    var bc = r.inst.status === 'Failed' ? 'failed' : r.inst.status === 'Running' ? 'running' : r.inst.status === 'Waiting' ? 'waiting' : 'success';
    return '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;margin-bottom:4px;border-radius:8px;cursor:pointer;background:linear-gradient(135deg,#FAFAFA,#F8F8FC);border:1px solid #F0F0F0;transition:.15s;" onmouseover="this.style.borderColor=\'#C9CDD4\';this.style.background=\'#F5F7FA\'" onmouseout="this.style.borderColor=\'#F0F0F0\';this.style.background=\'linear-gradient(135deg,#FAFAFA,#F8F8FC)\'" onclick="simulateSendWithText(\'Diagnose instance ' + r.id + '\')">' +
      '<span class="status-badge ' + bc + '" style="font-size:11px;flex-shrink:0;white-space:nowrap;">' + r.inst.status + '</span>' +
      '<div style="flex:1;min-width:0;overflow:hidden;">' +
      '<div style="color:#1890FF;font-size:12px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + r.inst.task + '</div>' +
      '<div style="font-size:11px;color:#8C8C8C;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + r.id + '</div>' +
      '</div>' +
      (r.inst.note ? '<span style="color:#8C8C8C;font-size:11px;flex-shrink:0;white-space:nowrap;">' + r.inst.note + '</span>' : '') +
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#BFBFBF" stroke-width="2" style="flex-shrink:0;"><path d="M9 18l6-6-6-6"/></svg></div>';
  }).join('');
  return '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:14px 16px;">Found <strong>' + results.length + '</strong> matching ' + filterLabel + ' instances today:</div>' +
    '<div style="padding:0 16px 12px;">' + rows + '</div>' +
    '<div style="padding:4px 16px 12px;font-size:11px;color:#BFBFBF;">Click an instance to run diagnosis</div></div>';
}

function genSearchTasks(filter) {
  var results = [];
  var specificPri = filter.match(/^priority_(\d)$/);
  Object.entries(TASKS).forEach(function(e) {
    var name = e[0], t = e[1];
    var priNum = getPriorityNum(t.priority);
    if (specificPri && priNum === parseInt(specificPri[1])) results.push({ name: name, task: t });
    else if (filter === 'high_priority' && priNum >= 4) results.push({ name: name, task: t });
    else if (filter === 'low_priority' && priNum <= 2) results.push({ name: name, task: t });
    else if (filter === 'all') results.push({ name: name, task: t });
  });
  var filterLabel = specificPri ? 'Priority P' + specificPri[1] : filter === 'high_priority' ? 'high-priority' : filter === 'low_priority' ? 'low-priority' : 'matching';
  if (results.length === 0) {
    return '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">No results found' + (filter === 'all' ? '.' : ' for ' + filterLabel + ' tasks.') + '</div></div>';
  }
  results.sort(function(a, b) { return getPriorityNum(b.task.priority) - getPriorityNum(a.task.priority); });
  var rows = results.map(function(r) {
    var priNum = getPriorityNum(r.task.priority);
    var priLabel = PRI_LABEL[r.task.priority] || 'Medium';
    var priColor = priNum >= 4 ? '#FF4D4F' : priNum >= 3 ? '#FA8C16' : '#8C8C8C';
    var taskInsts = Object.entries(INSTANCES).filter(function(e) { return e[1].task === r.name; });
    var latestInst = taskInsts.length > 0 ? taskInsts[taskInsts.length - 1] : null;
    var statusSummary = '';
    if (latestInst) {
      var bc = latestInst[1].status === 'Failed' ? 'failed' : latestInst[1].status === 'Running' ? 'running' : latestInst[1].status === 'Waiting' ? 'waiting' : 'success';
      statusSummary = '<span class="status-badge ' + bc + '" style="font-size:10px;padding:0 6px;">' + latestInst[1].status + '</span>';
    }
    return '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;margin-bottom:4px;border-radius:8px;cursor:pointer;background:linear-gradient(135deg,#FAFAFA,#F8F8FC);border:1px solid #F0F0F0;transition:.15s;" onmouseover="this.style.borderColor=\'#C9CDD4\';this.style.background=\'#F5F7FA\'" onmouseout="this.style.borderColor=\'#F0F0F0\';this.style.background=\'linear-gradient(135deg,#FAFAFA,#F8F8FC)\'" onclick="navToTask(\'' + r.name + '\')">' +
      '<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:6px;background:' + (priNum >= 4 ? '#FFF1F0' : priNum >= 3 ? '#FFF7E6' : '#F5F5F5') + ';color:' + priColor + ';font-weight:700;font-size:12px;flex-shrink:0;">P' + priNum + '</span>' +
      '<span style="flex:1;min-width:0;">' +
      '<span style="color:#1890FF;font-size:12px;font-weight:500;">' + r.name + '</span>' +
      '<div style="font-size:11px;color:#8C8C8C;">' + r.task.type + ' · ' + r.task.owner + '</div>' +
      '</span>' +
      '<span style="display:flex;gap:3px;flex-shrink:0;">' + statusSummary + '</span>' +
      '</div>';
  }).join('');
  return '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:14px 16px;">' + (filter === 'all' ? 'Found <strong>' + results.length + '</strong> tasks:' : 'Found <strong>' + results.length + '</strong> matching ' + filterLabel + ' tasks:') + '</div>' +
    '<div style="padding:0 16px 12px;">' + rows + '</div></div>';
}

function genInfoCode(ctx, embedSummary) {
  const name = ctx.taskName || 'update_table';
  var summary = TASK_CODE_SUMMARIES[name] || 'This task is a <strong>Spark SQL</strong> daily batch job.';
  if (embedSummary === false) {
    return '<div class="response-wrap"><div class="resp-section" style="border-bottom:none;"><div class="link-btns"><button type="button" class="link-btn" onclick="linkTo(\'view-code\',null,{taskName:\'' + name + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M16 18l2-2-2-2M8 18l-2-2 2-2M14 4l-4 16"/></svg>View Full Code</button></div></div></div>';
  }
  return '<div class="response-wrap"><div class="msg-bubble" style="border:none;background:transparent;padding:0 0 4px;">' + summary + '</div>' +
'<div class="resp-section" style="border-bottom:none;"><div class="link-btns"><button type="button" class="link-btn" onclick="linkTo(\'view-code\',null,{taskName:\'' + name + '\'})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M16 18l2-2-2-2M8 18l-2-2 2-2M14 4l-4 16"/></svg>View Full Code</button></div></div></div>';
}

function buildOpSection(title, summary, content, options) {
  var opts = options || {};
  var sectionClass = 'op-section' + (opts.compact ? ' op-section-compact' : '');
  var headerHtml = '<div class="op-section-head">' +
    '<div class="op-section-meta">' +
    '<div class="op-section-title">' + title + '</div>' +
    (summary ? '<div class="op-section-summary">' + summary + '</div>' : '') +
    '</div>' +
    '</div>';
  if (opts.collapsible) {
    return '<details class="' + sectionClass + '"' + (opts.open ? ' open' : '') + (opts.attrs ? ' ' + opts.attrs : '') + '>' +
      '<summary class="op-section-toggle">' + headerHtml + '<span class="op-section-arrow"></span></summary>' +
      '<div class="op-section-body">' + content + '</div>' +
      '</details>';
  }
  return '<div class="' + sectionClass + '"' + (opts.attrs ? ' ' + opts.attrs : '') + '>' +
    headerHtml +
    '<div class="op-section-body">' + content + '</div>' +
    '</div>';
}

function genOperationConfirm(intent, ctx) {
  const name = ctx.taskName || 'update_table';
  const inst = ctx.instanceId;
  const taskCode = (TASKS[name] || TASKS.update_table).code;
  const uid = 'dyn-' + Date.now();
  var warnSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>';
  var rerunIco = '<div class="r-card-ico" style="background:#F0F2F5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg></div>';
  if (intent.type === 'op_rerun') {
    var taskInstances = Object.entries(INSTANCES).filter(function(e) { return e[1].task === name; });
    var instRow = '';
    if (inst) {
      instRow = '<div class="ac-row"><span class="ac-key">Instance Code</span><span class="ac-val" style="font-size:11px;">' + inst + '</span></div>';
    } else if (taskInstances.length > 0) {
      var opts = taskInstances.map(function(e) {
        return '<option value="' + e[0] + '">' + e[0] + ' (' + e[1].status + ')</option>';
      }).join('');
      instRow = '<div class="ac-row"><span class="ac-key">Instance Code</span><span class="ac-val-edit"><select class="ac-select" style="font-size:11px;width:100%;max-width:320px;">' + opts + '</select></span></div>';
    } else {
      instRow = '<div class="ac-row"><span class="ac-key">Instance Code</span><span class="ac-val" style="font-size:11px;color:#FF4D4F;">No instances for this task</span></div>';
    }
    var eventDateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    var eventName = eventDateStr + '_RERUN_' + name;
    var dep = DEPS[name] || { up: [], down: [] };
    var downInsts = [];
    if (dep.down.length > 0) {
      for (var di = 0; di < dep.down.length; di++) {
        var dn = dep.down[di];
        var dnInsts = Object.entries(INSTANCES).filter(function(e) { return e[1].task === dn; });
        for (var dj = 0; dj < dnInsts.length; dj++) {
          downInsts.push({ id: dnInsts[dj][0], task: dn, status: dnInsts[dj][1].status });
        }
      }
    }
    var hasPauseResume = true;
    var pauseResumeHtml = '';
    if (hasPauseResume) {
      pauseResumeHtml = '<div class="ac-row" id="' + uid + '-pause-row" style="align-items:flex-start;display:none;"><span class="ac-key">Pause and Resume</span><span class="ac-val-edit" style="flex-direction:column;align-items:stretch;gap:8px;">' +
        '<div style="display:flex;align-items:center;gap:4px;font-size:11px;color:#1890FF;cursor:pointer;" onclick="resetPauseResume(\'' + uid + '\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg> Reset to Project Setting</div>' +
        '<div class="op-inline-note">Add one or more pause windows for the rerun cascade. The table can scroll horizontally when the panel is narrow.</div>' +
        '<div class="op-table-scroll"><table class="pr-table" id="' + uid + '-pr-table"><thead><tr><th>Pause At</th><th>Resume At</th><th>Pause running instance</th><th>Action</th></tr></thead><tbody>' +
        '<tr><td><input class="ac-input" type="time" value="23:30" style="width:90px;"/></td><td><input class="ac-input" type="time" value="00:30" style="width:90px;"/></td><td><label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label></td><td><span class="pr-delete" onclick="deletePauseRow(this)">Delete</span></td></tr>' +
        '</tbody></table></div>' +
        '<div class="ac-add-btn" style="text-align:center;" onclick="addPauseRow(\'' + uid + '\')">+ Add</div>' +
        '</span></div>';
    }
    var downstreamScopeHtml = '';
    if (downInsts.length > 0) {
      downstreamScopeHtml += '<div class="ac-row" id="' + uid + '-downstream-preview-row" style="align-items:flex-start;display:none;"><span class="ac-key">Downstream Instances</span><span class="ac-val-edit"><details class="inline-disclosure"><summary class="inline-disclosure-toggle">Downstream Instances (' + downInsts.length + ')</summary><div class="inline-disclosure-body"><div class="op-list-panel">';
      for (var dii = 0; dii < downInsts.length; dii++) {
        var bc = downInsts[dii].status === 'Failed' ? '#FF4D4F' : downInsts[dii].status === 'Running' ? '#1890FF' : downInsts[dii].status === 'Waiting' ? '#FAAD14' : '#52C41A';
        downstreamScopeHtml += '<div class="op-list-item"><svg class="op-list-dot" width="6" height="6" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="' + bc + '"/></svg><span class="op-list-link" onclick="navToInstance(\'' + downInsts[dii].id + '\')">' + downInsts[dii].id + '</span><span style="color:#8C8C8C;">(' + downInsts[dii].status + ')</span></div>';
      }
      downstreamScopeHtml += '</div></div></details></span></div>';
    } else if (dep.down.length > 0) {
      downstreamScopeHtml += '<div class="ac-row" id="' + uid + '-downstream-preview-row" style="display:none;"><span class="ac-key">Downstream Tasks</span><span class="ac-val"><details class="inline-disclosure"><summary class="inline-disclosure-toggle">Downstream Tasks (' + dep.down.length + ')</summary><div class="inline-disclosure-body" style="font-size:11px;color:#595959;">' + dep.down.join(', ') + '</div></details></span></div>';
    }

    var summaryRow = '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Summary On Rerun Completion</span><span class="ac-val-edit" style="flex-direction:column;align-items:stretch;"><div class="rerun-summary-list" id="' + uid + '-summary-list"></div><div class="ac-add-btn" style="text-align:center;" onclick="addRerunAlarmPolicy(\'' + uid + '\')">+ Add</div></span></div>';
    var rerunContextSection = buildOpSection('Execution Scope', 'Instance and downstream scope', 
      '<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
      '<div class="ac-row"><span class="ac-key">Task Code</span><span class="ac-val" style="font-size:11px;">' + taskCode + '</span></div>' +
      instRow +
      '<div class="ac-row"><span class="ac-key">Event Name</span><span class="ac-val-edit"><input class="ac-input" id="' + uid + '-event-name" type="text" value="' + eventName + '" style="font-size:11px;"/></span></div>' +
      '<div class="ac-row"><span class="ac-key">Include Downstream</span><span class="ac-val-edit"><select class="ac-select" id="' + uid + '-downstream" onchange="toggleCascadeRerun(\'' + uid + '\',\'' + name + '\')"><option value="no" selected>No (rerun this instance only)</option><option value="yes">Yes (cascade rerun downstream)</option></select></span></div>' +
      downstreamScopeHtml
    , { open: true });
    var rerunExecSection = buildOpSection('Execution Settings', 'Priority, dependency handling, DQC', 
      '<div class="ac-row"><span class="ac-key">Priority</span><span class="ac-val-edit"><select class="ac-select"><option value="lower">Lower priority than scheduled tasks</option><option value="same" selected>Same priority as scheduled tasks (Recommended)</option><option value="higher">Higher priority than scheduled tasks</option></select></span></div>' +
      '<div class="ac-row" id="' + uid + '-concurrency-row" style="display:none;"><span class="ac-key">Concurrency</span><span class="ac-val-edit"><div class="stepper-wrap"><button type="button" class="stepper-btn" onclick="stepConcurrency(this,-1)">-</button><input class="ac-input stepper-input" type="number" value="1" min="1" max="100" onchange="validateConcurrency(this)" onblur="validateConcurrency(this)"/><button type="button" class="stepper-btn" onclick="stepConcurrency(this,1)">+</button></div><span class="ac-hint">Range 1~100</span></span></div>' +
      '<div class="ac-row" id="' + uid + '-skipdep-row"><span class="ac-key">Skip Dependency</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-skipdep" value="all"/> All</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-skipdep" value="none" checked/> None</label></span></div>' +
      '<div class="ac-row"><span class="ac-key">Skip DQC</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-dqc" value="yes"/> Yes</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-dqc" value="no" checked/> No</label></span></div>'
    , { collapsible: true });
    var rerunNotificationSection = buildOpSection('Notifications', 'Completion summary, task alarms, and pause schedule',
      summaryRow +
      '<div class="ac-row"><span class="ac-key">Individual Task Alarms</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-alarm" value="on" checked/> On</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-alarm" value="off"/> Off</label></span></div>' +
      pauseResumeHtml
    , { collapsible: true });

    return '<div class="msg-bubble">Please confirm the following rerun:</div><div class="r-card" id="' + uid + '-card" data-op="rerun"><div class="r-card-h">' + rerunIco + '<span class="r-card-t">Operation Confirmation: Rerun <span style="font-size:10px;background:#FFF1F0;color:#CF1322;padding:1px 6px;border-radius:3px;margin-left:4px;">Instance Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
rerunContextSection +
rerunExecSection +
rerunNotificationSection +
'</div><div class="ac-warning" id="' + uid + '-warning">' + warnSvg + 'New instance(s) will be generated based on the latest submitted code version. Execution starts immediately after confirmation.</div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmDynRerun(\'' + uid + '\',\'' + name + '\',\'' + (inst || '') + '\')">Confirm</button></div></div></div>';
  }
  if (intent.type === 'op_backfill') {
    var bfStart = intent.startDate || '2026-03-27';
    var bfEnd = intent.endDate || '2026-04-03';
    var bfDays = intent.days || (function() { var s = new Date(bfStart), e = new Date(bfEnd); return Math.round((e - s) / 86400000) + 1; })();
    var bfEventDateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    var bfEventName = bfEventDateStr + '_BACKFILL_' + name;
    var bfSummaryRow = '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Summary On Backfill Completion</span><span class="ac-val-edit" style="flex-direction:column;align-items:stretch;"><div class="rerun-summary-list" id="' + uid + '-summary-list"></div><div class="ac-add-btn" style="text-align:center;" onclick="addRerunAlarmPolicy(\'' + uid + '\')">+ Add</div></span></div>';
    var bfDep = DEPS[name] || { up: [], down: [] };
    var bfDownHtml = '';
    if (bfDep.down.length > 0) {
      for (var bdi = 0; bdi < bfDep.down.length; bdi++) {
        bfDownHtml += '<div class="op-list-item"><svg class="op-list-dot" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg><span class="op-list-link" style="font-size:11px;" onclick="navToTask(\'' + bfDep.down[bdi] + '\')">' + bfDep.down[bdi] + '</span></div>';
      }
    } else {
      bfDownHtml = '<span style="color:#8C8C8C;font-size:11px;">No downstream tasks</span>';
    }
    var bfPauseHtml = '<div class="ac-row" id="' + uid + '-bf-pause-row" style="align-items:flex-start;"><span class="ac-key">Pause and Resume</span><span class="ac-val-edit" style="flex-direction:column;align-items:stretch;gap:8px;"><div style="display:flex;align-items:center;gap:4px;font-size:11px;color:#1890FF;cursor:pointer;" onclick="resetPauseResume(\'' + uid + '-bf\')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg> Reset to Project Setting</div><div class="op-inline-note">Define pause windows for cascaded downstream runs. This schedule stays available without squeezing the rest of the card.</div><div class="op-table-scroll"><table class="pr-table" id="' + uid + '-bf-pr-table"><thead><tr><th>Pause at</th><th>Resume at</th><th>Status</th><th></th></tr></thead><tbody><tr><td><input class="ac-input" type="time" value="23:30" style="width:90px;"/></td><td><input class="ac-input" type="time" value="00:30" style="width:90px;"/></td><td><label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label></td><td><span class="pr-delete" onclick="deletePauseRow(this)">Delete</span></td></tr></tbody></table></div><div class="ac-add-btn" style="text-align:center;" onclick="addBfPauseRow(\'' + uid + '\')">+ Add Schedule</div></span></div>';
    var bfBasicSection = buildOpSection('Basic Settings', 'Scope and run setup',
      '<div class="op-context-block"><div class="op-context-name">' + name + '</div><div class="op-context-code">' + taskCode + '</div></div>' +
      '<div class="ac-row"><span class="ac-key">Event Name</span><span class="ac-val-edit"><input class="ac-input" type="text" value="' + bfEventName + '" style="font-size:11px;width:100%;max-width:320px;"/></span></div>' +
      '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Backfill Date (UTC+8)</span><span class="ac-val-edit" style="flex-direction:column;align-items:stretch;"><div id="' + uid + '-range-list" class="bf-range-list"><div class="ac-date-range bf-date-range"><input class="ac-input" type="date" value="' + bfStart + '" id="' + uid + '-start" onchange="updateBackfillDays(\'' + uid + '\')"/><span class="bf-date-arrow">&rarr;</span><input class="ac-input" type="date" value="' + bfEnd + '" id="' + uid + '-end" onchange="updateBackfillDays(\'' + uid + '\')"/><span class="bf-range-spacer" aria-hidden="true"></span></div></div><button type="button" class="ac-add-btn bf-range-add" onclick="addBackfillRange(\'' + uid + '\')">+ Add Range (<span id="' + uid + '-days">1</span>/100)</button></span></div>' +
      '<div class="ac-row"><span class="ac-key">Backfill Target</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-target" value="both" checked onchange="toggleBfTarget(\'' + uid + '\')"/> Task Instance + Marker</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-target" value="marker" onchange="toggleBfTarget(\'' + uid + '\')"/> Marker Only</label></span></div>' +
      '<div class="ac-row" id="' + uid + '-bf-cascade-row"><span class="ac-key">Cascade Downstream</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-cascade" value="yes" onchange="toggleBfCascade(\'' + uid + '\')"/> Yes</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-cascade" value="no" checked onchange="toggleBfCascade(\'' + uid + '\')"/> No</label></span></div>' +
      '<div class="ac-row" id="' + uid + '-bf-priority-row"><span class="ac-key">Priority</span><span class="ac-val-edit"><select class="ac-select"><option value="lower" selected>Lower priority than scheduled tasks (Recommended)</option><option value="same">Same priority as scheduled tasks</option><option value="higher">Higher priority than scheduled tasks</option></select></span></div>' +
      '<div class="ac-row"><span class="ac-key">Running Mode</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-runmode" value="serial" checked onchange="toggleBfRunMode(\'' + uid + '\')"/> Serial</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-runmode" value="parallel" onchange="toggleBfRunMode(\'' + uid + '\')"/> Parallel</label></span></div>' +
      '<div class="ac-row" id="' + uid + '-bf-runorder-row"><span class="ac-key">Running Order</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-runorder" value="asc" checked/> Earliest to Latest</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-runorder" value="desc"/> Latest to Earliest</label></span></div>' +
      '<div class="ac-row" id="' + uid + '-bf-concurrency-row" style="display:none;"><span class="ac-key">Concurrency</span><span class="ac-val-edit"><div class="stepper-wrap"><button type="button" class="stepper-btn" onclick="stepConcurrency(this,-1)">−</button><input class="stepper-input" type="number" value="10" min="1" max="100" onchange="validateConcurrency(this)"/><button type="button" class="stepper-btn" onclick="stepConcurrency(this,1)">+</button></div><span style="color:#8C8C8C;font-size:11px;margin-left:8px;">Range: 1-100</span></span></div>'
    , { open: true });
    var bfAdvancedSection = buildOpSection('Advanced Execution', 'Dependency, DQC, and cascade details',
      '<div class="ac-row"><span class="ac-key">Skip Dependency</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-skipdep" value="all"/> All</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-skipdep" value="none" checked/> None</label></span></div>' +
      '<div class="ac-row"><span class="ac-key">Skip DQC</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-dqc" value="yes"/> Yes</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-dqc" value="no" checked/> No</label></span></div>' +
      '<div id="' + uid + '-bf-cascade-section" style="display:none;"><div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Downstream Tasks</span><span class="ac-val-edit" style="flex-direction:column;align-items:flex-start;gap:6px;"><div class="op-list-panel">' + bfDownHtml + '</div></span></div></div>'
    , { collapsible: true, attrs: 'id="' + uid + '-bf-advanced"' });
    var bfNotificationSection = buildOpSection('Execution and Notifications', 'Summary, alarms, and pause schedule',
      bfSummaryRow +
      '<div class="ac-row" id="' + uid + '-bf-alarm-row"><span class="ac-key">Individual Task Alarms</span><span class="ac-val-edit"><label class="ac-radio-label"><input type="radio" name="' + uid + '-alarm" value="on" checked/> On</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-alarm" value="off"/> Off</label></span></div>' +
      bfPauseHtml
    , { collapsible: true });
    var bfMarkerNotificationSection = buildOpSection('Execution and Notifications', 'Marker completion summary',
      '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Summary On Backfill Completion</span><span class="ac-val-edit" style="flex-direction:column;align-items:stretch;"><div class="rerun-summary-list" id="' + uid + '-marker-summary-list"></div><div class="ac-add-btn" style="text-align:center;" onclick="addRerunAlarmPolicy(\'' + uid + '-marker\')">+ Add</div></span></div>'
    , { collapsible: true });

    return '<div class="msg-bubble">Please confirm the following backfill:</div><div class="r-card" id="' + uid + '-card" data-op="backfill"><div class="r-card-h"><div class="r-card-ico" style="background:#F0F2F5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><span class="r-card-t">Operation Confirmation: Backfill <span style="font-size:10px;background:#F0F2F5;color:#1890FF;padding:1px 6px;border-radius:3px;margin-left:4px;">Task Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
bfBasicSection +
'<div id="' + uid + '-instance-fields">' +
bfAdvancedSection +
bfNotificationSection +
'</div>' +
'<div id="' + uid + '-marker-fields" style="display:none;">' + bfMarkerNotificationSection + '</div>' +
'</div><div class="ac-warning" id="' + uid + '-warning">' + warnSvg + '<span id="' + uid + '-warn-text">Will create ' + bfDays + ' instances for backfill. Execution starts immediately after confirmation.</span></div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmDynBackfill(\'' + uid + '\')">Confirm</button></div></div></div>';
  }
  if (intent.type === 'op_dqc') {
    var dqcInst = inst || Object.keys(INSTANCES).find(function(k) { return INSTANCES[k].task === name; }) || '';
    return '<div class="msg-bubble">Please confirm the following DQC retry:</div><div class="r-card" id="' + uid + '-card" data-op="dqc"><div class="r-card-h"><div class="r-card-ico" style="background:#FFF7E6"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FA8C16" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><span class="r-card-t">Operation Confirmation: Retry DQC <span style="font-size:10px;background:#FFF1F0;color:#CF1322;padding:1px 6px;border-radius:3px;margin-left:4px;">Instance Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
'<div class="ac-row"><span class="ac-key">Operation Type</span><span class="ac-val">Retry DQC</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Instance Code</span><span class="ac-val" style="font-size:11px;">' + dqcInst + '</span></div>' +
'</div><div class="ac-warning" id="' + uid + '-warning">' + warnSvg + 'Will rerun the DQC check.</div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmDynDQC(\'' + uid + '\',\'' + name + '\',\'' + dqcInst + '\')">Confirm</button></div></div></div>';
  }
  const opMap = { op_freeze: 'Freeze', op_unfreeze: 'Unfreeze', op_kill: 'Kill', op_priority: 'Adjust Priority', op_alarm: 'Alarm', op_mark_success: 'Mark Success', op_trigger_now: 'Trigger Now' };
  const opn = opMap[intent.type] || 'Operation';
  if (intent.type === 'op_freeze') {
    var dep = DEPS[name] || { up: [], down: [] };
    var activeFreezeInsts = Object.entries(INSTANCES).filter(function(e) {
      return e[1].task === name && (e[1].status === 'Running' || e[1].status === 'Waiting');
    });
    var downHtml = '';
    if (dep.down.length > 0) {
      downHtml = '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Potentially affected downstream</span><span class="ac-val-edit" style="flex-direction:column;align-items:flex-start;gap:4px;">';
      for (var di = 0; di < dep.down.length; di++) {
        var dn = dep.down[di];
        downHtml += '<div style="display:flex;align-items:center;gap:4px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FA8C16" stroke-width="2" style="flex-shrink:0;"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg><span style="color:#1890FF;cursor:pointer;" onclick="navToTask(\'' + dn + '\')">' + dn + '</span></div>';
      }
      downHtml += '</span></div>';
    }
    var activeInstHtml = '';
    var freezeWarnMsg = 'After freezing, this task and its instances will no longer be scheduled' + (dep.down.length > 0 ? '. Potentially <strong>' + dep.down.length + '</strong> downstream dependent tasks may also be affected.' : '.');
    if (activeFreezeInsts.length > 0) {
      activeInstHtml = '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Active instances</span><span class="ac-val-edit" style="flex-direction:column;align-items:flex-start;gap:6px;">';
      for (var afi = 0; afi < activeFreezeInsts.length; afi++) {
        var freezeInstId = activeFreezeInsts[afi][0];
        var freezeInstStatus = activeFreezeInsts[afi][1].status;
        activeInstHtml += '<div style="display:flex;flex-direction:column;align-items:flex-start;gap:3px;">' +
          '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;"><span style="color:#1890FF;cursor:pointer;font-size:11px;" onclick="navToInstance(\'' + freezeInstId + '\')">' + freezeInstId + '</span><span class="status-badge ' + statusBadgeClass(freezeInstStatus) + '" style="font-size:10px;padding:0 5px;">' + freezeInstStatus + '</span></div>' +
          '</div>';
      }
      activeInstHtml += '</span></div>' +
        '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Kill active instances</span><span class="ac-val-edit" style="flex-direction:column;align-items:flex-start;gap:4px;">' +
        '<label class="ac-radio-label"><input type="radio" name="' + uid + '-freeze-kill" value="no" checked/> No (freeze task only)</label>' +
        '<label class="ac-radio-label"><input type="radio" name="' + uid + '-freeze-kill" value="yes"/> Yes (terminate current running/waiting instances)</label>' +
        '<span class="ac-hint" style="white-space:normal;">Freezing stops future scheduling. Choose whether currently running or waiting instances should also be killed immediately.</span>' +
        '</span></div>';
      freezeWarnMsg = 'After freezing, this task will no longer be scheduled. <strong>' + activeFreezeInsts.length + '</strong> running/waiting instance' + (activeFreezeInsts.length > 1 ? 's are' : ' is') + ' still active, so please confirm whether to terminate ' + (activeFreezeInsts.length > 1 ? 'them' : 'it') + ' immediately.' + (dep.down.length > 0 ? ' Potentially <strong>' + dep.down.length + '</strong> downstream dependent tasks may also be affected.' : '');
    }
    return '<div class="msg-bubble">Please confirm the following freeze:</div><div class="r-card" id="' + uid + '-card" data-op="gen"><div class="r-card-h"><div class="r-card-ico" style="background:#F0F2F5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/></svg></div><span class="r-card-t">Operation Confirmation: Freeze task <span style="font-size:10px;background:#F0F2F5;color:#1890FF;padding:1px 6px;border-radius:3px;margin-left:4px;">Task Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
'<div class="ac-row"><span class="ac-key">Operation Type</span><span class="ac-val">Freeze task (Freeze)</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Code</span><span class="ac-val" style="font-size:11px;">' + taskCode + '</span></div>' +
downHtml +
activeInstHtml +
'</div><div class="ac-warning" id="' + uid + '-warning">' + warnSvg + freezeWarnMsg + '</div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmFreeze(\'' + uid + '\',\'' + name + '\')">Confirm</button></div></div></div>';
  }
  if (intent.type === 'op_priority') {
    var t = TASKS[name] || {};
    var curPri = t.priority || 'P3';
    var curNum = getPriorityNum(curPri);
    var curLabel = PRI_LABEL[curPri] || 'Medium';
    var priOptions = '';
    for (var pi = 1; pi <= 5; pi++) {
      var pk = 'P' + pi;
      var sel = (pi === curNum) ? ' selected' : '';
      priOptions += '<option value="' + pi + '"' + sel + '>' + pi + ' - ' + PRI_LABEL[pk] + (pi === curNum ? ' (current)' : '') + '</option>';
    }
    return '<div class="msg-bubble">Task <strong>' + name + '</strong> current priority is <strong>' + curNum + '</strong> (' + curLabel + '). Please select a new priority:</div>' +
    '<div class="r-card" id="' + uid + '-card" data-op="gen"><div class="r-card-h"><div class="r-card-ico" style="background:#F0F2F5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M12 20V4M5 11l7-7 7 7"/></svg></div><span class="r-card-t">Operation Confirmation: Adjust Priority <span style="font-size:10px;background:#F0F2F5;color:#1890FF;padding:1px 6px;border-radius:3px;margin-left:4px;">Task Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
    '<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
    '<div class="ac-row"><span class="ac-key">Task Code</span><span class="ac-val" style="font-size:11px;">' + taskCode + '</span></div>' +
    '<div class="ac-row"><span class="ac-key">Current Priority</span><span class="ac-val"><span style="display:inline-flex;align-items:center;gap:4px;"><span style="background:#F0F2F5;color:#1890FF;padding:1px 8px;border-radius:3px;font-weight:600;">' + curNum + '</span><span style="color:#8C8C8C;">(' + curLabel + ')</span></span></span></div>' +
    '<div class="ac-row"><span class="ac-key">Select New Priority</span><span class="ac-val"><select class="policy-select" id="' + uid + '-pri-select" style="color:#333;min-width:180px;">' + priOptions + '</select></span></div>' +
    '</div><div class="ac-warning" id="' + uid + '-warning"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>Priority will be changed immediately after confirmation. Priority range is 1–5; higher numbers mean higher priority. Raising priority helps this task obtain scheduling resources sooner.</div>' +
    '<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmPriority(\'' + uid + '\',\'' + name + '\')">Confirm</button></div></div></div>';
  }
  if (intent.type === 'op_unfreeze') {
    return '<div class="msg-bubble">Please confirm the following unfreeze:</div><div class="r-card" id="' + uid + '-card" data-op="gen"><div class="r-card-h"><div class="r-card-ico" style="background:#F6FFED"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52C41A" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/></svg></div><span class="r-card-t">Operation Confirmation: Unfreeze task <span style="font-size:10px;background:#F6FFED;color:#52C41A;padding:1px 6px;border-radius:3px;margin-left:4px;">Task Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
'<div class="ac-row"><span class="ac-key">Operation Type</span><span class="ac-val">Unfreeze task (Unfreeze)</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Code</span><span class="ac-val" style="font-size:11px;">' + taskCode + '</span></div>' +
'</div><div class="ac-warning" id="' + uid + '-warning">' + warnSvg + 'After unfreezing, this task will resume normal scheduling.</div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmDynGeneric(\'' + uid + '\',\'Unfreeze\')">Confirm</button></div></div></div>';
  }
  if (intent.type === 'op_skip_dep') {
    var skipInst = inst || Object.keys(INSTANCES).find(function(k) { return INSTANCES[k].task === name; }) || '';
    var skipState = getSkipDependencyRequestState(intent.rawText || '', ctx);
    var skipCandidates = skipState.candidates;
    var skipScopeHtml = '';
    if (skipCandidates.length > 0) {
      var checkboxItems = skipCandidates.map(function(candidate, index) {
        var checkboxId = uid + '-skip-item-' + index;
        var isChecked = skipState.preselectedTargets.indexOf(candidate.taskName) >= 0;
        var isRecommended = !!skipState.recommendedTarget && skipState.recommendedTarget.taskName === candidate.taskName;
        return renderSkipDependencyTarget(candidate, {
          uid: uid,
          checkboxId: checkboxId,
          checked: isChecked,
          recommended: isRecommended
        });
      }).join('');
      var helperText = skipState.recommendedTarget
        ? 'The diagnosed blocking upstream is preselected. Other unresolved upstreams remain optional.'
        : 'Select one or more unresolved upstream dependencies to bypass.';
      var selectAllText = skipCandidates.length > 1 ? '<button type="button" class="skip-select-all" id="' + uid + '-skip-select-all" onclick="toggleAllSkipDependencies(\'' + uid + '\')">Select all unresolved upstreams</button>' : '';
      skipScopeHtml =
        '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Upstreams to bypass</span><span class="ac-val skip-target-list-wrap">' +
        '<div class="skip-target-toolbar">' + selectAllText + '<span class="ac-hint" style="white-space:normal;">' + helperText + '</span></div>' +
        '<div class="skip-target-list" id="' + uid + '-skip-list">' + checkboxItems + '</div>' +
        '</span></div>';
    }
    return '<div class="msg-bubble">Please confirm the following skip dependency:</div><div class="r-card" id="' + uid + '-card" data-op="gen"><div class="r-card-h"><div class="r-card-ico" style="background:#FFF7E6"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D46B08" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div><span class="r-card-t">Operation Confirmation: Skip Dependency <span style="font-size:10px;background:#FFF1F0;color:#CF1322;padding:1px 6px;border-radius:3px;margin-left:4px;">Instance Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
'<div class="ac-row"><span class="ac-key">Operation Type</span><span class="ac-val">Skip Dependency</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Instance Code</span><span class="ac-val" style="font-size:11px;">' + skipInst + '</span></div>' +
skipScopeHtml +
'</div><div class="ac-warning" id="' + uid + '-warning" style="border-color:#FFD591;">' + warnSvg + 'After skipping dependencies, this instance will no longer wait for upstream completion and will start immediately. <strong>Ensure missing upstream data will not affect the correctness of this task.</strong></div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmSkipDependency(\'' + uid + '\',\'' + name + '\',\'' + skipInst + '\')">Confirm</button></div></div></div>';
  }
  if (intent.type === 'op_kill') {
    var killInst = inst || Object.keys(INSTANCES).find(function(k) { return INSTANCES[k].task === name; }) || '';
    var killStatus = killInst && INSTANCES[killInst] ? INSTANCES[killInst].status : 'Unknown';
    var killStatusCls = killStatus === 'Running' ? 'running' : killStatus === 'Failed' ? 'failed' : killStatus === 'Waiting' ? 'waiting' : 'success';
    return '<div class="msg-bubble">Please confirm the following kill:</div><div class="r-card" id="' + uid + '-card" data-op="gen"><div class="r-card-h"><div class="r-card-ico" style="background:#FFF1F0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4D4F" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg></div><span class="r-card-t">Operation Confirmation: Kill <span style="font-size:10px;background:#FFF1F0;color:#CF1322;padding:1px 6px;border-radius:3px;margin-left:4px;">Instance Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
'<div class="ac-row"><span class="ac-key">Operation Type</span><span class="ac-val">Kill (Terminate)</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Code</span><span class="ac-val" style="font-size:11px;">' + taskCode + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Instance Code</span><span class="ac-val" style="font-size:11px;">' + killInst + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Current Status</span><span class="ac-val"><span class="status-badge ' + killStatusCls + '" style="font-size:10px;padding:1px 8px;">' + killStatus + '</span></span></div>' +
'</div><div class="ac-warning" id="' + uid + '-warning" style="border-color:#FFA39E;">' + warnSvg + 'This will <strong>immediately terminate</strong> the running instance. The instance status will change to "Failed". This action cannot be undone.</div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" style="background:linear-gradient(135deg,#FF4D4F,#FF7875);" onclick="confirmDynGeneric(\'' + uid + '\',\'Kill\',\'' + name + '\',\'' + killInst + '\',\'instance\')">Confirm Kill</button></div></div></div>';
  }
  if (intent.type === 'op_mark_success') {
    var msInst = inst || Object.keys(INSTANCES).find(function(k) { return INSTANCES[k].task === name && INSTANCES[k].status !== 'Successful'; }) || '';
    var msStatus = msInst && INSTANCES[msInst] ? INSTANCES[msInst].status : 'Unknown';
    var msStatusCls = msStatus === 'Running' ? 'running' : msStatus === 'Failed' ? 'failed' : msStatus === 'Waiting' ? 'waiting' : 'success';
    var dep = DEPS[name] || { up: [], down: [] };
    var msDownHint = '';
    if (dep.down.length > 0) {
      msDownHint = '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Downstream tasks to unblock</span><span class="ac-val-edit" style="flex-direction:column;align-items:flex-start;gap:2px;font-size:11px;">';
      for (var mdi = 0; mdi < dep.down.length; mdi++) {
        msDownHint += '<span style="color:#1890FF;cursor:pointer;" onclick="navToTask(\'' + dep.down[mdi] + '\')">' + dep.down[mdi] + '</span>';
      }
      msDownHint += '</span></div>';
    }
    return '<div class="msg-bubble">Please confirm the following mark success:</div><div class="r-card" id="' + uid + '-card" data-op="gen"><div class="r-card-h"><div class="r-card-ico" style="background:#F6FFED"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52C41A" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><span class="r-card-t">Operation Confirmation: Mark Success <span style="font-size:10px;background:#FFF1F0;color:#CF1322;padding:1px 6px;border-radius:3px;margin-left:4px;">Instance Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
'<div class="ac-row"><span class="ac-key">Operation Type</span><span class="ac-val">Mark Success</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Code</span><span class="ac-val" style="font-size:11px;">' + taskCode + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Instance Code</span><span class="ac-val" style="font-size:11px;">' + msInst + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Current Status</span><span class="ac-val"><span class="status-badge ' + msStatusCls + '" style="font-size:10px;padding:1px 8px;">' + msStatus + '</span> &rarr; <span class="status-badge success" style="font-size:10px;padding:1px 8px;">Successful</span></span></div>' +
msDownHint +
'</div><div class="ac-warning" id="' + uid + '-warning" style="border-color:#FFD591;">' + warnSvg + 'This will forcibly mark the instance as <strong>Successful</strong> without actual execution. Downstream tasks that depend on this instance will be unblocked. <strong>Ensure the output data is correct or not needed.</strong></div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmDynGeneric(\'' + uid + '\',\'Mark Success\',\'' + name + '\',\'' + msInst + '\',\'instance\')">Confirm</button></div></div></div>';
  }
  if (intent.type === 'op_trigger_now') {
    var tnInst = Object.keys(INSTANCES).find(function(k) { return INSTANCES[k].task === name; }) || '';
    var tnHasRun = tnInst && INSTANCES[tnInst] && (INSTANCES[tnInst].status === 'Successful' || INSTANCES[tnInst].status === 'Failed' || INSTANCES[tnInst].status === 'Running');
    var tnStatus = tnInst && INSTANCES[tnInst] ? INSTANCES[tnInst].status : 'Not Executed';
    var tnStatusCls = tnStatus === 'Running' ? 'running' : tnStatus === 'Failed' ? 'failed' : tnStatus === 'Waiting' ? 'waiting' : tnStatus === 'Successful' ? 'success' : '';
    var tnBizDate = new Date().toISOString().slice(0, 10);
    var tnNote = '';
    var tnScheduleOption = '';
    if (tnHasRun) {
      tnNote = '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Execution Status</span><span class="ac-val"><span class="status-badge ' + tnStatusCls + '" style="font-size:10px;padding:1px 8px;">' + tnStatus + '</span><span style="font-size:11px;color:#FA8C16;margin-left:6px;">Instance already executed for this business date</span></span></div>';
    } else {
      tnNote = '<div class="ac-row"><span class="ac-key">Execution Status</span><span class="ac-val"><span style="font-size:11px;color:#8C8C8C;">Not yet executed for this business date</span></span></div>';
      tnScheduleOption = '<div class="ac-row" style="align-items:flex-start;"><span class="ac-key">Execute at scheduled time</span><span class="ac-val-edit" style="flex-direction:column;align-items:flex-start;gap:4px;"><label class="ac-radio-label"><input type="radio" name="' + uid + '-schedrun" value="yes" checked/> Yes (still execute at scheduled time)</label><label class="ac-radio-label"><input type="radio" name="' + uid + '-schedrun" value="no"/> No (skip the scheduled execution)</label><span class="ac-hint">Whether to also run this instance at the originally scheduled time</span></span></div>';
    }
    var tnWarnMsg = tnHasRun
      ? 'This business date instance has already been executed (status: <strong>' + tnStatus + '</strong>). Trigger Now will <strong>re-execute</strong> this instance immediately with the latest code version.'
      : 'This will <strong>immediately execute</strong> the instance for today\'s business date. The instance will start without waiting for its scheduled time.';
    return '<div class="msg-bubble">Please confirm the following trigger now:</div><div class="r-card" id="' + uid + '-card" data-op="gen"><div class="r-card-h"><div class="r-card-ico" style="background:#F0F2F5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div><span class="r-card-t">Operation Confirmation: Trigger Now <span style="font-size:10px;background:#F0F2F5;color:#1890FF;padding:1px 6px;border-radius:3px;margin-left:4px;">Task Level</span></span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
'<div class="ac-row"><span class="ac-key">Operation Type</span><span class="ac-val">Trigger Now</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Code</span><span class="ac-val" style="font-size:11px;">' + taskCode + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Business Date</span><span class="ac-val">' + tnBizDate + '</span></div>' +
tnNote +
tnScheduleOption +
'</div><div class="ac-warning" id="' + uid + '-warning">' + warnSvg + tnWarnMsg + '</div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmDynGeneric(\'' + uid + '\',\'Trigger Now\',\'' + name + '\',\'\',\'task\')">Confirm</button></div></div></div>';
  }
  var levelTag = (intent.level === 'instance') ? '<span style="font-size:10px;background:#FFF1F0;color:#CF1322;padding:1px 6px;border-radius:3px;margin-left:4px;">Instance Level</span>' : '<span style="font-size:10px;background:#F0F2F5;color:#1890FF;padding:1px 6px;border-radius:3px;margin-left:4px;">Task Level</span>';
  return '<div class="msg-bubble">Please confirm the following ' + opn + ':</div><div class="r-card" id="' + uid + '-card" data-op="gen"><div class="r-card-h"><span class="r-card-t">Operation Confirmation: ' + opn + ' ' + levelTag + '</span></div><div class="ac-body"><div class="ac-params" id="' + uid + '-params">' +
'<div class="ac-row"><span class="ac-key">Operation Type</span><span class="ac-val">' + opn + '</span></div>' +
'<div class="ac-row"><span class="ac-key">Task Name</span><span class="ac-val">' + name + '</span></div>' +
((inst || (intent.level === 'instance')) ? '<div class="ac-row"><span class="ac-key">Task Instance Code</span><span class="ac-val" style="font-size:11px;">' + (inst || Object.keys(INSTANCES).find(function(k) { return INSTANCES[k].task === name; }) || '') + '</span></div>' : '') +
'</div><div class="ac-warning" id="' + uid + '-warning">' + warnSvg + 'Execution starts immediately after confirmation. Please verify carefully.</div>' +
'<div class="ac-btns" id="' + uid + '-btns"><button type="button" class="ac-btn cancel" onclick="cancelOperation(\'' + uid + '\')">Cancel</button><button type="button" class="ac-btn primary" onclick="confirmDynGeneric(\'' + uid + '\',\'' + opn + '\',\'' + name + '\',\'' + (inst || Object.keys(INSTANCES).find(function(k) { return INSTANCES[k].task === name; }) || '') + '\',\'' + intent.level + '\')">Confirm</button></div></div></div>';
}

function genUnsupported() {
  return '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:0;">' +
'<div style="display:flex;align-items:flex-start;gap:8px;padding:10px 14px;background:linear-gradient(135deg,#FFFBE6 0%,#FFF7E6 100%);border:1px solid #FFE58F;border-radius:8px;margin-bottom:8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D46B08" stroke-width="2" style="flex-shrink:0;margin-top:1px;"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg><div style="font-size:12px;color:#D46B08;line-height:1.6;">This operation is not supported via AI assistant.</div></div>' +
'<div class="r-card" style="margin-top:0;"><div class="r-card-b" style="padding:12px 14px;"><div style="font-size:12px;color:#595959;margin-bottom:8px;font-weight:600;">Supported Operations</div><div style="font-size:11px;color:#8C8C8C;margin-bottom:4px;">Instance Level</div><div class="ops-list"><span class="ops-tag allowed">Rerun</span><span class="ops-tag allowed">Kill</span><span class="ops-tag allowed">Skip Dependency</span><span class="ops-tag allowed">Mark Success</span><span class="ops-tag allowed">Retry DQC</span></div><div style="font-size:11px;color:#8C8C8C;margin-bottom:4px;margin-top:10px;">Task Level</div><div class="ops-list"><span class="ops-tag allowed">Backfill</span><span class="ops-tag allowed">Freeze/Unfreeze</span><span class="ops-tag allowed">Priority</span><span class="ops-tag allowed">Trigger Now</span><span class="ops-tag allowed">Alarm</span></div></div></div>' +
'</div></div>';
}

function genCapabilityIntro() {
  return '<div class="cap-card">' +
    '<div class="cap-header">' +
      '<div class="cap-header-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>' +
      '<div class="cap-header-text"><div class="cap-header-title">Scheduler Agent</div><div class="cap-header-sub">Here\'s what I can help you with</div></div>' +
    '</div>' +
    '<div class="cap-grid">' +
      '<div class="cap-item"><div class="cap-item-icon" style="background:linear-gradient(135deg,#F5F7FA,#ECEFF1);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div><div class="cap-item-body"><div class="cap-item-title">Anomaly Detection</div><div class="cap-item-desc">Scan today\'s runs, surface failed / slow / waiting instances</div></div></div>' +
      '<div class="cap-item"><div class="cap-item-icon" style="background:linear-gradient(135deg,#FFF1F0,#FFE8E6);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF4D4F" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg></div><div class="cap-item-body"><div class="cap-item-title">Root Cause Diagnosis</div><div class="cap-item-desc">Pinpoint failure causes, analyze resource bottlenecks, suggest fixes</div></div></div>' +
      '<div class="cap-item"><div class="cap-item-icon" style="background:linear-gradient(135deg,#F5F7FA,#E8ECF0);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div><div class="cap-item-body"><div class="cap-item-title">Information Query</div><div class="cap-item-desc">Dependencies, code logic, logs, lineage, priority &mdash; ask in plain language</div></div></div>' +
      '<div class="cap-item"><div class="cap-item-icon" style="background:linear-gradient(135deg,#F6FFED,#E6FFD6);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52C41A" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg></div><div class="cap-item-body"><div class="cap-item-title">Ops Execution</div><div class="cap-item-desc">Rerun, Kill, Backfill, Freeze, Adjust Priority &mdash; always with confirmation</div></div></div>' +
    '</div>' +
    '<div class="cap-examples">' +
      '<div class="cap-ex-title"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Try asking</div>' +
      '<div class="cap-ex-row">' +
        '<span class="cap-ex-chip" onclick="fillInput(\'Diagnose instance di_scheduler.studio_6801187_20260403_DAY_2\')">Diagnose a failed instance</span>' +
        '<span class="cap-ex-chip" onclick="fillInput(\'Show dependencies for task update_table\')">Show task dependencies</span>' +
        '<span class="cap-ex-chip" onclick="fillInput(\'Any anomalies in today\\\'s runs?\')">Today\'s anomalies</span>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function computeOverviewStats() {
  var total = 0, success = 0, failed = 0, running = 0, waiting = 0;
  var anomalies = [];
  Object.entries(INSTANCES).forEach(function(e) {
    var id = e[0], inst = e[1];
    total++;
    if (inst.status === 'Successful') success++;
    else if (inst.status === 'Failed') { failed++; anomalies.push({ id: id, inst: inst, type: 'failed' }); }
    else if (inst.status === 'Running') { running++; anomalies.push({ id: id, inst: inst, type: 'running' }); }
    else if (inst.status === 'Waiting') { waiting++; anomalies.push({ id: id, inst: inst, type: 'waiting' }); }
  });
  return { total: total, success: success, failed: failed, running: running, waiting: waiting, anomalies: anomalies };
}

function buildAnomalyDesc(inst) {
  if (inst.status === 'Failed') return 'Failed' + (inst.note ? ' · ' + inst.note : '');
  if (inst.status === 'Running') return 'Running slowly' + (inst.note ? ' · ' + inst.note : '');
  if (inst.status === 'Waiting') return 'Waiting' + (inst.note ? ' · ' + inst.note : '');
  return inst.status;
}

function buildAnomalyQuestion(id, inst) {
  if (inst.status === 'Failed') return 'Diagnose why instance ' + id + ' failed';
  if (inst.status === 'Running') return 'Analyze why instance ' + id + ' is running slowly';
  if (inst.status === 'Waiting') return 'Analyze why instance ' + id + ' is still waiting';
  return 'Diagnose instance ' + id;
}

function buildOverviewGrid(stats) {
  var ovSvg = {
    total: '<svg class="ov-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" d="M4 5.5h6v6H4v-6zm10 0h6v6h-6v-6zM4 15.5h6v6H4v-6zm10 0h6v6h-6v-6z"/></svg>',
    success: '<svg class="ov-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.25" fill="none"/><path stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" d="M8 12.5l2.5 2.5L16 9.5"/></svg>',
    failed: '<svg class="ov-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.25" fill="none"/><path stroke="currentColor" stroke-width="1.25" stroke-linecap="round" d="M15 9l-6 6M9 9l6 6"/></svg>',
    running: '<svg class="ov-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.25" stroke-linecap="round" d="M7 18V11M12 18V7m5 11v-6"/></svg>',
    waiting: '<svg class="ov-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.25" fill="none"/><path stroke="currentColor" stroke-width="1.25" stroke-linecap="round" d="M12 7v5l3.5 2"/></svg>'
  };
  var items = [
    { key: 'total', val: stats.total, label: 'Total', color: '#2463C7', wrapClass: 'ov-cell-icon--total', icon: ovSvg.total },
    { key: 'success', val: stats.success, label: 'Success', color: '#2E8B45', wrapClass: 'ov-cell-icon--success', icon: ovSvg.success },
    { key: 'failed', val: stats.failed, label: 'Failed', color: '#C53434', wrapClass: 'ov-cell-icon--failed', icon: ovSvg.failed },
    { key: 'running', val: stats.running, label: 'Running', color: '#2463C7', wrapClass: 'ov-cell-icon--running', icon: ovSvg.running },
    { key: 'waiting', val: stats.waiting, label: 'Waiting', color: '#B37400', wrapClass: 'ov-cell-icon--waiting', icon: ovSvg.waiting }
  ];
  return '<div class="ov-grid">' + items.map(function(it) {
    return '<div class="ov-cell" onclick="openAllInstances(\'' + it.key + '\')">' +
      '<div class="ov-cell-icon ' + it.wrapClass + '">' + it.icon + '</div>' +
      '<div class="ov-cell-info"><div class="ov-cell-val" style="color:' + it.color + ';">' + it.val + '</div>' +
      '<div class="ov-cell-label">' + it.label + '</div></div></div>';
  }).join('') + '</div>';
}

function buildAnomalyList(anomalies) {
  if (anomalies.length === 0) return '<div class="ov-no-anomaly"><svg class="ov-svg ov-no-anomaly-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="#52C41A" stroke-width="1.5" fill="none"/><path stroke="#52C41A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8 12.5l2.5 2.5L16 9.5"/></svg> All instances running normally</div>';
  var items = anomalies.map(function(a) {
    var st = a.inst.status;
    var tagClass = st === 'Failed' ? 'st-failed' : st === 'Running' ? 'st-running' : st === 'Waiting' ? 'st-waiting' : 'st-success';
    var desc = buildAnomalyDesc(a.inst);
    var question = buildAnomalyQuestion(a.id, a.inst);
    var taskLabel = a.inst.task || '—';
    return '<div class="ov-anomaly" onclick="simulateSendWithText(\'' + question.replace(/'/g, "\\'") + '\')">' +
      '<span class="status-tag ' + tagClass + '">' + st + '</span>' +
      '<div class="ov-anomaly-mid">' +
      '<span class="ov-anomaly-name">' + escapeHtml(taskLabel) + '</span>' +
      '<span class="ov-anomaly-desc">' + escapeHtml(desc) + '</span>' +
      '</div>' +
      '<svg class="ov-anomaly-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#BFBFBF" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></div>';
  }).join('');
  return '<div class="ov-anomaly-header"><svg class="ov-attn-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path stroke="#FF4D4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M12 9v4M12 17h.01"/><path stroke="#FF4D4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg><span>Attention Required</span><span class="ov-anomaly-count">' + anomalies.length + '</span></div><div class="ov-anomaly-list">' + items + '</div>';
}

function genPatrol() {
  var stats = computeOverviewStats();
  return '<div class="ov-card">' +
    '<div class="ov-card-header"><svg class="ov-header-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M4 19h16M6 15l3-4 3 2 4-6 4 5"/><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M4 19V5"/></svg><span>Today\'s Overview</span><span class="ov-date">2026-04-03</span></div>' +
    '<div class="ov-card-body">' + buildOverviewGrid(stats) + '</div>' +
    '<div class="ov-card-body" style="padding-top:0;">' + buildAnomalyList(stats.anomalies) + '</div></div>';
}

function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('.cb-code');
  const t = pre.innerText || pre.textContent;
  navigator.clipboard.writeText(t).then(() => {
    btn.classList.add('copied');
    btn.textContent = 'Copied ✓';
    setTimeout(() => { btn.classList.remove('copied'); btn.textContent = 'Copy'; }, 2000);
  }).catch(() => showToast('Copy failed'));
}

function insertCode(btn) {
  btn.textContent = 'Inserted into editor ✓';
  showToast('Inserted into editor ✓');
  setTimeout(() => { btn.textContent = 'Insert into editor'; }, 2000);
}

function likeMsg(btn) {
  if (btn.classList.contains('active')) { btn.classList.remove('active'); return; }
  btn.parentElement.querySelectorAll('.msg-act').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function dislikeMsg(btn) {
  if (btn.classList.contains('active')) { btn.classList.remove('active'); return; }
  btn.parentElement.querySelectorAll('.msg-act').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function copyMsgContent(btn) {
  const body = btn.closest('.msg-body');
  const wrap = body.querySelector('.response-wrap') || body.querySelector('.msg-bubble');
  const t = wrap ? wrap.innerText : '';
  navigator.clipboard.writeText(t).then(() => showToast('Copied'));
}

function appendMsgActions(html) {
  return html + '<div class="msg-actions"><button type="button" class="msg-act" onclick="likeMsg(this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg></button><button type="button" class="msg-act" onclick="dislikeMsg(this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z"/><path d="M17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"/></svg></button><button type="button" class="msg-act" onclick="copyMsgContent(this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button></div>';
}

function showProcessingSteps(conv, steps) {
  return new Promise(resolve => {
    const host = document.createElement('div');
    host.className = 'msg agent proc-host';
    const pid = 'proc-' + Date.now();
    host.innerHTML = '<div class="msg-av agent">' + AGENT_SVG + '</div><div class="msg-body"><div class="msg-bubble" style="padding:12px;"><div class="proc-steps" id="' + pid + '"></div></div></div>';
    conv.appendChild(host);
    const box = host.querySelector('.proc-steps');
    let i = 0;
    function next() {
      if (i >= steps.length) {
        setTimeout(() => { host.remove(); resolve(); }, 400);
        return;
      }
      const st = steps[i];
      const row = document.createElement('div');
      row.className = 'proc-step visible active';
      row.innerHTML = '<span class="ps-spinner"></span><span>' + st.icon + ' ' + st.text + '</span>';
      box.appendChild(row);
      scrollActiveConv();
      setTimeout(() => {
        row.classList.remove('active');
        row.classList.add('done');
        row.innerHTML = '<span style="color:#8C8C8C">✓</span><span>' + st.icon + ' ' + st.text + '</span>';
        i++;
        setTimeout(next, 400);
      }, 500);
    }
    setTimeout(next, 400);
  });
}

function addRerunAlarmPolicy(uid) {
  var list = document.getElementById(uid + '-summary-list');
  if (!list) return;
  var policyOpts = ALARM_POLICIES.map(function(p) {
    return '<option value="' + p.name + '">' + p.name + '</option>';
  }).join('');
  var item = document.createElement('div');
  item.className = 'rerun-policy-item';
  item.innerHTML = '<select class="ac-select" style="flex:1;min-width:140px;"><option value="">Please select alarm policy</option>' + policyOpts + '</select><button type="button" class="pr-delete-btn" onclick="this.parentElement.remove()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg></button>';
  list.appendChild(item);
}

function addPauseRow(uid) {
  var tbody = document.querySelector('#' + uid + '-pr-table tbody');
  if (!tbody) return;
  var tr = document.createElement('tr');
  tr.innerHTML = '<td><input class="ac-input" type="time" value="23:30" style="width:90px;"/></td><td><input class="ac-input" type="time" value="00:30" style="width:90px;"/></td><td><label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label></td><td><span class="pr-delete" onclick="deletePauseRow(this)">Delete</span></td>';
  tbody.appendChild(tr);
}
function deletePauseRow(el) { el.closest('tr').remove(); }
function resetPauseResume(uid) {
  var tbody = document.querySelector('#' + uid + '-pr-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '<tr><td><input class="ac-input" type="time" value="23:30" style="width:90px;"/></td><td><input class="ac-input" type="time" value="00:30" style="width:90px;"/></td><td><label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label></td><td><span class="pr-delete" onclick="deletePauseRow(this)">Delete</span></td></tr>';
}

function toggleCascadeRerun(uid, taskName) {
  var sel = document.getElementById(uid + '-downstream');
  var skipDepRow = document.getElementById(uid + '-skipdep-row');
  var concurrencyRow = document.getElementById(uid + '-concurrency-row');
  var pauseRow = document.getElementById(uid + '-pause-row');
  var downstreamPreviewRow = document.getElementById(uid + '-downstream-preview-row');
  var eventInput = document.getElementById(uid + '-event-name');
  if (!sel) return;
  var isCascade = sel.value === 'yes';
  if (skipDepRow) skipDepRow.style.display = isCascade ? 'none' : '';
  if (concurrencyRow) concurrencyRow.style.display = isCascade ? '' : 'none';
  if (pauseRow) pauseRow.style.display = isCascade ? '' : 'none';
  if (downstreamPreviewRow) downstreamPreviewRow.style.display = isCascade ? '' : 'none';
  if (eventInput && taskName) {
    var dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    eventInput.value = dateStr + (isCascade ? '_CASC_RERUN_' : '_RERUN_') + taskName;
  }
  var warnEl = document.getElementById(uid + '-warning');
  if (warnEl) {
    var warnSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>';
    if (isCascade) {
      warnEl.innerHTML = warnSvg + 'Cascade rerun will re-execute this instance <strong>and all downstream instances</strong>. Execution starts immediately after confirmation.';
    } else {
      warnEl.innerHTML = warnSvg + 'New instance(s) will be generated based on the latest submitted code version. Execution starts immediately after confirmation.';
    }
  }
  scrollActiveConv();
}

function triggerDynRerun(uid, name, inst) {
  const conv = document.querySelector('.conv-container.active');
  appendAgentMsg(conv, genOperationConfirm({ type: 'op_rerun', level: 'instance' }, { taskName: name, instanceId: inst }));
}

function confirmDynRerun(uid, taskName, instId) {
  const btns = document.getElementById(uid + '-btns');
  if (btns && btns.classList.contains('disabled')) return;
  if (btns) btns.classList.add('disabled');
  const params = document.getElementById(uid + '-params');
  const warning = document.getElementById(uid + '-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  var resolvedInst = instId;
  if (!resolvedInst) {
    var sel = params && params.querySelector('.ac-select');
    if (sel) resolvedInst = sel.value;
  }
  var eventInput = document.querySelector('#' + uid + '-card input[id$="-event-name"]');
  var eventName = eventInput ? eventInput.value : '';
  var linkHtml = '<a class="acd-link" onclick="navToRerunEvent(\'' + taskName + '\',\'' + eventName + '\')">View Execution Details →</a>';
  if (btns) btns.innerHTML = '<div class="ac-done confirmed"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#389E0D" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="acd-info"><div class="acd-text">Submitted successfully</div><div class="acd-sub">Instance added to scheduler queue</div></div>' + linkHtml + '</div>';
  showToast('Submitted successfully!');
  scrollActiveConv();
}

function stepConcurrency(btn, delta) {
  var wrap = btn.closest('.stepper-wrap');
  var input = wrap.querySelector('.stepper-input');
  var val = parseInt(input.value) || 1;
  val = Math.min(100, Math.max(1, val + delta));
  input.value = val;
}
function validateConcurrency(input) {
  var val = parseInt(input.value);
  if (isNaN(val) || val < 1) input.value = 1;
  else if (val > 100) input.value = 100;
}

function toggleBfTarget(uid) {
  var radios = document.querySelectorAll('input[name="' + uid + '-target"]');
  var val = 'both';
  for (var i = 0; i < radios.length; i++) { if (radios[i].checked) val = radios[i].value; }
  var instFields = document.getElementById(uid + '-instance-fields');
  var markerFields = document.getElementById(uid + '-marker-fields');
  var cascadeRow = document.getElementById(uid + '-bf-cascade-row');
  var priorityRow = document.getElementById(uid + '-bf-priority-row');
  var runOrderRow = document.getElementById(uid + '-bf-runorder-row');
  var pauseRow = document.getElementById(uid + '-bf-pause-row');
  if (instFields) instFields.style.display = val === 'both' ? '' : 'none';
  if (markerFields) markerFields.style.display = val === 'marker' ? '' : 'none';
  if (cascadeRow) cascadeRow.style.display = val === 'both' ? '' : 'none';
  if (priorityRow) priorityRow.style.display = val === 'both' ? '' : 'none';
  if (runOrderRow) runOrderRow.style.display = val === 'both' ? '' : 'none';
  if (pauseRow) pauseRow.style.display = val === 'both' ? '' : 'none';
  toggleBfRunMode(uid);
  scrollActiveConv();
}

function toggleBfRunMode(uid) {
  var radios = document.querySelectorAll('input[name="' + uid + '-runmode"]');
  var val = 'serial';
  for (var i = 0; i < radios.length; i++) { if (radios[i].checked) val = radios[i].value; }
  var concRow = document.getElementById(uid + '-bf-concurrency-row');
  var targetRadios = document.querySelectorAll('input[name="' + uid + '-target"]');
  var targetVal = 'both';
  for (var j = 0; j < targetRadios.length; j++) { if (targetRadios[j].checked) targetVal = targetRadios[j].value; }
  if (concRow) concRow.style.display = val === 'parallel' ? '' : 'none';
  if (concRow && targetVal === 'marker') {
    var hint = concRow.querySelector('.ac-hint');
    if (hint) hint.textContent = 'Range: 1-100';
  }
  scrollActiveConv();
}

function toggleBfCascade(uid) {
  var radios = document.querySelectorAll('input[name="' + uid + '-cascade"]');
  var val = 'no';
  for (var i = 0; i < radios.length; i++) { if (radios[i].checked) val = radios[i].value; }
  var sec = document.getElementById(uid + '-bf-cascade-section');
  var advanced = document.getElementById(uid + '-bf-advanced');
  if (sec) sec.style.display = val === 'yes' ? '' : 'none';
  if (advanced && val === 'yes') advanced.open = true;
  scrollActiveConv();
}

function addBfPauseRow(uid) {
  var tbody = document.querySelector('#' + uid + '-bf-pr-table tbody');
  if (!tbody) return;
  var tr = document.createElement('tr');
  tr.innerHTML = '<td><input class="ac-input" type="time" value="23:30" style="width:90px;"/></td><td><input class="ac-input" type="time" value="00:30" style="width:90px;"/></td><td><label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label></td><td><span class="pr-delete" onclick="deletePauseRow(this)">Delete</span></td>';
  tbody.appendChild(tr);
}

function getBackfillRanges(uid) {
  var rows = document.querySelectorAll('#' + uid + '-range-list .bf-date-range');
  var ranges = [];
  for (var i = 0; i < rows.length; i++) {
    var inputs = rows[i].querySelectorAll('input[type="date"]');
    if (inputs.length < 2) continue;
    ranges.push({ start: inputs[0].value, end: inputs[1].value });
  }
  return ranges;
}

function addBackfillRange(uid) {
  var list = document.getElementById(uid + '-range-list');
  if (!list) return;
  var count = getBackfillRanges(uid).length;
  if (count >= 100) {
    showToast('Up to 100 date ranges are supported.');
    return;
  }
  var lastRange = getBackfillRanges(uid);
  var fallbackStart = lastRange.length ? lastRange[lastRange.length - 1].start : '';
  var fallbackEnd = lastRange.length ? lastRange[lastRange.length - 1].end : '';
  var row = document.createElement('div');
  row.className = 'ac-date-range bf-date-range';
  row.innerHTML = '<input class="ac-input" type="date" value="' + fallbackStart + '" onchange="updateBackfillDays(\'' + uid + '\')"/><span class="bf-date-arrow">&rarr;</span><input class="ac-input" type="date" value="' + fallbackEnd + '" onchange="updateBackfillDays(\'' + uid + '\')"/><button type="button" class="bf-range-remove" aria-label="Remove range" title="Remove range" onclick="removeBackfillRange(this,\'' + uid + '\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg></button>';
  list.appendChild(row);
  updateBackfillDays(uid);
}

function removeBackfillRange(btn, uid) {
  var row = btn.closest('.bf-date-range');
  if (!row) return;
  row.remove();
  updateBackfillDays(uid);
}

function updateBackfillDays(uid) {
  var daysEl = document.getElementById(uid + '-days');
  var warnEl = document.getElementById(uid + '-warn-text');
  var ranges = getBackfillRanges(uid);
  var totalDays = 0;
  var valid = true;
  for (var i = 0; i < ranges.length; i++) {
    var start = new Date(ranges[i].start);
    var end = new Date(ranges[i].end);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      valid = false;
      continue;
    }
    var diff = Math.round((end - start) / (1000 * 60 * 60 * 24)) + 1;
    if (diff < 1) {
      valid = false;
      continue;
    }
    totalDays += diff;
  }
  if (daysEl) daysEl.textContent = String(ranges.length);
  if (warnEl) warnEl.textContent = valid && totalDays > 0 ? 'Will create ' + totalDays + ' instances for backfill. Execution starts immediately after confirmation.' : 'Invalid date range, please select again.';
}

function confirmDynBackfill(uid) {
  const btns = document.getElementById(uid + '-btns');
  if (btns && btns.classList.contains('disabled')) return;
  if (btns) btns.classList.add('disabled');
  const params = document.getElementById(uid + '-params');
  const warning = document.getElementById(uid + '-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  var ranges = getBackfillRanges(uid);
  var days = 0;
  for (var i = 0; i < ranges.length; i++) {
    if (!ranges[i].start || !ranges[i].end) continue;
    var diff = Math.round((new Date(ranges[i].end) - new Date(ranges[i].start)) / 86400000) + 1;
    if (diff > 0) days += diff;
  }
  if (days < 1) days = 1;
  var estMin = days * 3 + 4;
  if (btns) btns.innerHTML = '<div class="ac-done confirmed"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#389E0D" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="acd-info"><div class="acd-text">Submitted successfully</div><div class="acd-sub">' + days + ' instances · Submitted, estimated ' + estMin + ' min to complete</div></div><a class="acd-link" onclick="linkTo(\'view-event\')">View Event Details →</a></div>';
  showToast('Submitted successfully!');
  scrollActiveConv();
}

function confirmDynDQC(uid, taskName, instId) {
  const btns = document.getElementById(uid + '-btns');
  if (btns && btns.classList.contains('disabled')) return;
  if (btns) btns.classList.add('disabled');
  const params = document.getElementById(uid + '-params');
  const warning = document.getElementById(uid + '-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  var linkHtml = instId ? '<a class="acd-link" onclick="linkTo(\'view-detail\',null,{taskName:\'' + taskName + '\',instanceId:\'' + instId + '\'})">View Instance Details →</a>' : '';
  if (btns) btns.innerHTML = '<div class="ac-done confirmed"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#389E0D" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="acd-info"><div class="acd-text">Submitted successfully</div><div class="acd-sub">Re-running quality checks</div></div>' + linkHtml + '</div>';
  showToast('Submitted successfully!');
  scrollActiveConv();
}

function getSelectedSkipDependencyTargets(uid) {
  return Array.from(document.querySelectorAll('#' + uid + '-skip-list input[type="checkbox"]:checked')).map(function(el) {
    return el.value;
  });
}

function syncSkipDependencySelectionState(uid) {
  var list = document.getElementById(uid + '-skip-list');
  var selectAllBtn = document.getElementById(uid + '-skip-select-all');
  if (!list || !selectAllBtn) return;
  var allBoxes = Array.from(list.querySelectorAll('input[type="checkbox"]'));
  var checkedCount = allBoxes.filter(function(el) { return el.checked; }).length;
  selectAllBtn.textContent = checkedCount === allBoxes.length && allBoxes.length > 0
    ? 'All unresolved upstreams selected'
    : 'Select all unresolved upstreams';
}

function toggleAllSkipDependencies(uid) {
  var list = document.getElementById(uid + '-skip-list');
  if (!list) return;
  var allBoxes = Array.from(list.querySelectorAll('input[type="checkbox"]'));
  if (allBoxes.length === 0) return;
  var shouldSelectAll = allBoxes.some(function(el) { return !el.checked; });
  allBoxes.forEach(function(el) { el.checked = shouldSelectAll; });
  syncSkipDependencySelectionState(uid);
}

function confirmSkipDependency(uid, taskName, instId) {
  var btns = document.getElementById(uid + '-btns');
  if (btns && btns.classList.contains('disabled')) return;
  var candidates = getUnresolvedUpstreamCandidates(taskName);
  var selectedTaskNames = getSelectedSkipDependencyTargets(uid);
  if (candidates.length > 0 && selectedTaskNames.length === 0) {
    showToast('Please select at least one upstream dependency');
    return;
  }
  var targets = candidates.filter(function(c) { return selectedTaskNames.indexOf(c.taskName) >= 0; });
  var summaryText = 'Skipped dependency';
  if (targets.length === candidates.length && candidates.length > 1) {
    summaryText = 'Skipped all unresolved upstream dependencies (' + targets.length + ')';
  } else if (targets.length === 1) {
    summaryText = 'Skipped dependency: <strong>' + targets[0].taskName + '</strong>';
  } else if (targets.length > 1) {
    summaryText = 'Skipped ' + targets.length + ' upstream dependencies';
  }
  if (btns) btns.classList.add('disabled');
  var params = document.getElementById(uid + '-params');
  var warning = document.getElementById(uid + '-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  var linkHtml = instId ? '<a class="acd-link" onclick="linkTo(\'view-detail\',null,{taskName:\'' + taskName + '\',instanceId:\'' + instId + '\'})">View Instance Details →</a>' : '';
  if (btns) btns.innerHTML = '<div class="ac-done confirmed"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#389E0D" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="acd-info"><div class="acd-text">' + summaryText + '</div></div>' + linkHtml + '</div>';
  showToast('Submitted successfully!');
  scrollActiveConv();
}

function confirmFreeze(uid, taskName) {
  const btns = document.getElementById(uid + '-btns');
  if (btns && btns.classList.contains('disabled')) return;
  if (btns) btns.classList.add('disabled');
  const params = document.getElementById(uid + '-params');
  const warning = document.getElementById(uid + '-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  var killChoice = (document.querySelector('input[name="' + uid + '-freeze-kill"]:checked') || {}).value || 'no';
  var activeInsts = Object.entries(INSTANCES).filter(function(e) {
    return e[1].task === taskName && (e[1].status === 'Running' || e[1].status === 'Waiting');
  });
  var detailText = 'Task frozen successfully';
  if (activeInsts.length > 0) {
    if (killChoice === 'yes') {
      detailText = 'Task frozen and ' + activeInsts.length + ' active instance' + (activeInsts.length > 1 ? 's were' : ' was') + ' terminated';
    } else {
      detailText = 'Task frozen; existing running/waiting instances were kept';
    }
  }
  if (btns) btns.innerHTML = '<div class="ac-done confirmed"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#389E0D" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="acd-info"><div class="acd-text">' + detailText + '</div></div></div>';
  showToast('Submitted successfully!');
  scrollActiveConv();
}

function confirmDynGeneric(uid, opName, taskName, instId, level) {
  const btns = document.getElementById(uid + '-btns');
  if (btns && btns.classList.contains('disabled')) return;
  if (btns) btns.classList.add('disabled');
  const params = document.getElementById(uid + '-params');
  const warning = document.getElementById(uid + '-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  var linkHtml = '';
  if (level === 'instance' && instId) {
    linkHtml = '<a class="acd-link" onclick="linkTo(\'view-detail\',null,{taskName:\'' + taskName + '\',instanceId:\'' + instId + '\'})">View Instance Details →</a>';
  }
  if (btns) btns.innerHTML = '<div class="ac-done confirmed"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#389E0D" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="acd-info"><div class="acd-text">Submitted successfully</div></div>' + linkHtml + '</div>';
  showToast('Submitted successfully!');
  scrollActiveConv();
}

function confirmPriority(uid, taskName) {
  const btns = document.getElementById(uid + '-btns');
  if (btns && btns.classList.contains('disabled')) return;
  if (btns) btns.classList.add('disabled');
  const sel = document.getElementById(uid + '-pri-select');
  var newPri = sel ? parseInt(sel.value) : 3;
  var t = TASKS[taskName];
  var oldPri = t ? getPriorityNum(t.priority) : 3;
  if (t) t.priority = 'P' + newPri;
  var newLabel = PRI_LABEL['P' + newPri] || 'Medium';
  const params = document.getElementById(uid + '-params');
  const warning = document.getElementById(uid + '-warning');
  if (params) params.classList.add('dimmed');
  if (warning) warning.style.display = 'none';
  if (btns) btns.innerHTML = '<div class="ac-done confirmed"><div class="acd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#389E0D" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="acd-text">Priority changed from ' + oldPri + ' to <strong>' + newPri + '</strong> (' + newLabel + ')</div></div>';
  showToast('Priority updated: ' + taskName + ' → P' + newPri);
  scrollActiveConv();
}

function genInfoPriority(ctx) {
  var name = ctx.taskName || 'update_table';
  var t = TASKS[name] || {};
  var curPri = t.priority || 'P3';
  var curNum = getPriorityNum(curPri);
  var curLabel = PRI_LABEL[curPri] || 'Medium';
  return '<div class="response-wrap"><div class="msg-bubble" style="border:none;background:transparent;">' +
    'Priority for task <strong>' + name + '</strong>:' +
    '<div style="margin-top:8px;display:flex;align-items:center;gap:8px;">' +
    '<span style="display:inline-flex;align-items:center;gap:6px;background:#F5F7FA;border:1px solid #E0E3E8;padding:4px 12px;border-radius:6px;">' +
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" stroke-width="2"><path d="M12 20V4M5 11l7-7 7 7"/></svg>' +
    '<span style="font-size:16px;font-weight:700;color:#1890FF;">' + curNum + '</span>' +
    '<span style="font-size:12px;color:#1890FF;">(' + curLabel + ')</span>' +
    '</span>' +
    '<span style="font-size:11px;color:#8C8C8C;">Range: 1 (lowest) ~ 5 (highest)</span>' +
    '</div>' +
    '<div style="margin-top:8px;font-size:12px;color:#666;">Task Code: <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">' + (t.code || '') + '</code></div>' +
    '</div>' +
    '<div class="resp-section" style="border-bottom:none;"><div class="link-btns">' +
    '<button type="button" class="link-btn" onclick="simulateSendWithText(\'Adjust priority of ' + name + '\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 20V4M5 11l7-7 7 7"/></svg>Modify task priority</button>' +
    '</div></div></div>';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

async function getOpenEndedFallbackResponse() {
  return {
    content: 'This is a **static demo** with predefined structured capabilities.\n\nOpen-ended free chat is not enabled in this version.\n\nYou can try any of these instead:\n- "Any anomalies in today\'s runs" — run an inspection\n- "Diagnose instance di_scheduler.studio_6801187_20260403_DAY_2" — failure diagnosis\n- "Show dependencies for task update_table" — dependency query\n- "Explain code logic of update_table" — code explanation\n- "Rerun instance ..." / "Backfill task ..." — operations\n- "What capabilities do you have" — capability overview'
  };
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderMarkdown(raw) {
  var s = escapeHtml(raw);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
  s = s.replace(/`([^`]+)`/g, '<code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">$1</code>');
  var lines = s.split('\n');
  var html = '';
  var inList = false;
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var listMatch = line.match(/^\s*[-•]\s+(.*)/);
    var numMatch = line.match(/^\s*(\d+)[.)]\s+(.*)/);
    if (listMatch) {
      if (!inList) { html += '<ul style="margin:6px 0;padding-left:1.4em;">'; inList = 'ul'; }
      html += '<li style="margin-bottom:3px;">' + listMatch[1] + '</li>';
    } else if (numMatch) {
      if (!inList) { html += '<ol style="margin:6px 0;padding-left:1.4em;">'; inList = 'ol'; }
      html += '<li style="margin-bottom:3px;">' + numMatch[2] + '</li>';
    } else {
      if (inList) { html += '</' + inList + '>'; inList = false; }
      var headMatch = line.match(/^#{1,3}\s+(.*)/);
      if (headMatch) {
        html += '<div style="font-weight:600;margin:8px 0 4px;">' + headMatch[1] + '</div>';
      } else {
        html += (line.trim() === '' ? '<br>' : line + '<br>');
      }
    }
  }
  if (inList) html += '</' + inList + '>';
  html = html.replace(/(<br>\s*)+$/, '');
  return html;
}

function appendUserMsg(conv, text) {
  const div = document.createElement('div');
  div.className = 'msg user';
  var escaped = escapeHtml(text);
  div.innerHTML = '<div class="msg-av human">U</div><div class="msg-body"><div class="msg-bubble">' + escaped + '</div>' +
    '<div class="msg-actions user-actions"><button class="msg-act" title="Copy" onclick="copyUserMsg(this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button></div></div>';
  conv.appendChild(div);
}

function copyUserMsg(btn) {
  var bubble = btn.closest('.msg-body').querySelector('.msg-bubble');
  if (!bubble) return;
  var text = bubble.textContent || bubble.innerText;
  navigator.clipboard.writeText(text).then(function() {
    showToast('Copied');
  }).catch(function() {
    showToast('Copy failed');
  });
}

function genFollowUpSuggestions(intentType, ctx, userText) {
  var name = ctx.taskName || '';
  var inst = ctx.instanceId || '';
  var suggestions = [];
  switch (intentType) {
    case 'diagnosis_failure':
      suggestions = [
        'View system log for ' + name,
        name ? 'What are the dependencies of task ' + name : 'View dependencies of this task',
        inst ? 'Rerun instance ' + inst : 'Rerun this instance'
      ];
      break;
    case 'diagnosis_slow':
      suggestions = [
        inst ? 'Terminate instance ' + inst : 'Terminate this instance',
        name ? 'View code logic of ' + name : 'View code logic',
        name ? 'Resource usage for task ' + name : 'Analyze resource usage'
      ];
      break;
    case 'diagnosis_waiting':
      suggestions = [
        inst ? 'Skip dependency for instance ' + inst : 'Skip dependency',
        name ? 'What are the dependencies of task ' + name : 'View dependencies',
        'Which instances are abnormal today'
      ];
      break;
    case 'diagnosis_resource':
      suggestions = [
        name ? 'Explain the code logic of ' + name : 'View code logic',
        inst ? 'Diagnose instance ' + inst : 'Diagnose this instance',
        'Which tasks have high priority'
      ];
      break;
    case 'info_dependency':
      suggestions = [
        name ? 'Explain the code logic of ' + name : 'View code logic',
        name ? 'View priority of ' + name : 'View priority',
        name ? 'Backfill task ' + name : 'Run backfill operation'
      ];
      break;
    case 'info_code':
      suggestions = [
        name ? 'What are the dependencies of task ' + name : 'View dependencies',
        inst ? 'Diagnose instance ' + inst : (name ? 'Diagnose latest instance of task ' + name : 'Diagnose instance'),
        'How to optimize big data task performance'
      ];
      break;
    case 'info_priority':
      suggestions = [
        name ? 'Adjust priority of ' + name : 'Modify task priority',
        'Which tasks have high priority',
        name ? 'What are the dependencies of task ' + name : 'View dependencies'
      ];
      break;
    case 'patrol':
      suggestions = [
        'Which tasks failed today',
        'Which instances are abnormal today',
        'Which tasks have high priority'
      ];
      break;
    case 'search_instances':
      suggestions = [
        'Which tasks have high priority',
        'Today\'s run overview',
        'Which instances are waiting today'
      ];
      break;
    case 'search_tasks':
      suggestions = [
        'Which instances are abnormal today',
        'Which tasks failed today',
        'Today\'s run overview'
      ];
      break;
    case 'op_rerun':
    case 'op_kill':
    case 'op_skip_dep':
    case 'op_dqc':
    case 'op_mark_success':
      suggestions = [
        inst ? 'View dependencies of instance ' + inst : 'View instance dependencies',
        name ? 'Explain the code logic of ' + name : 'View code logic',
        'Which instances are abnormal today'
      ];
      break;
    case 'op_backfill':
    case 'op_freeze':
    case 'op_unfreeze':
    case 'op_priority':
    case 'op_trigger_now':
      suggestions = [
        name ? 'What are the dependencies of task ' + name : 'View dependencies',
        'Which tasks have high priority',
        'Today\'s run overview'
      ];
      break;
    case 'capability_intro':
      suggestions = [
        'Today\'s run overview',
        'Which instances are abnormal today',
        'Which tasks have high priority'
      ];
      break;
    default:
      return [];
  }
  return suggestions.slice(0, 2);
}

function renderFollowUpHtml(suggestions) {
  if (!suggestions || suggestions.length === 0) return '';
  var items = suggestions.map(function(s) {
    return '<div class="follow-up-item" onclick="simulateSendWithText(\'' + s.replace(/'/g, "\\'") + '\')"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>' + s + '</div>';
  }).join('');
  return '<div class="follow-up-wrap"><div class="follow-up-title"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>You might also want to ask</div>' + items + '</div>';
}

function genOpenEndedFollowUps(userText, ctx) {
  var suggestions = [];
  var name = ctx.taskName || '';
  var inst = ctx.instanceId || '';
  if (name) {
    suggestions.push('What are the dependencies of task ' + name);
    suggestions.push('Explain the code logic of ' + name);
  } else if (inst) {
    suggestions.push('Diagnose instance ' + inst);
    suggestions.push('Which instances are abnormal today');
  } else {
    suggestions.push('Which instances are abnormal today');
    suggestions.push('Today\'s run overview');
  }
  return suggestions.slice(0, 2);
}

function getMsgActionsHtml() {
  return '<div class="msg-actions"><button type="button" class="msg-act" onclick="likeMsg(this)">' + SVG_LIKE + '</button><button type="button" class="msg-act" onclick="dislikeMsg(this)">' + SVG_DISLIKE + '</button><button type="button" class="msg-act" onclick="copyMsgContent(this)">' + SVG_COPY + '</button></div>';
}

function appendAgentMsg(conv, innerHtml, inputTokens, outputTokens, followUpHtml) {
  const div = document.createElement('div');
  div.className = 'msg agent';
  var bodyHtml = innerHtml;
  if (followUpHtml) bodyHtml += followUpHtml;
  if (inputTokens !== undefined && inputTokens !== null && outputTokens !== undefined && outputTokens !== null) {
    var tot = inputTokens + outputTokens;
    bodyHtml += '<div class="token-info">⚡ ' + tot.toLocaleString() + ' tokens (input: ' + inputTokens.toLocaleString() + ' / output: ' + outputTokens.toLocaleString() + ')</div>';
  }
  bodyHtml += getMsgActionsHtml();
  div.innerHTML = '<div class="msg-av agent">' + AGENT_SVG + '</div><div class="msg-body">' + bodyHtml + '</div>';
  conv.appendChild(div);
  scrollActiveConv();
  return bodyHtml;
}

function appendThinking(conv) {
  const div = document.createElement('div');
  div.className = 'msg agent thinking-msg';
  div.innerHTML = '<div class="msg-av agent">' + AGENT_SVG + '</div><div class="msg-body"><div class="thinking-indicator"><div class="think-spinner"></div>Analyzing...</div></div>';
  conv.appendChild(div);
  scrollActiveConv();
  return div;
}

function simulateSend() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  inputHistory.push(text);
  inputHistoryIdx = -1;
  simulateSendWithText(text);
}

async function simulateSendWithText(text) {
  let conv = document.querySelector('.conv-container.active');
  if (!conv || conv.id === 'conv-welcome') {
    var newSession = SessionManager.createSession();
    const dynConv = document.createElement('div');
    dynConv.className = 'conv-container active';
    dynConv.id = newSession.id;
    document.querySelectorAll('.conv-container').forEach(c => c.classList.remove('active'));
    const inputArea = document.querySelector('.input-area');
    inputArea.parentNode.insertBefore(dynConv, inputArea);
    conv = dynConv;
  }
  var wc = conv.querySelector('.welcome-card');
  if (wc) wc.remove();
  appendUserMsg(conv, text);
  const entities = extractEntities(text);
  const intent = classifyIntent(text);
  intent.rawText = text;
  resolveContext(text, entities, intent);
  var activeConvId = conv.id;
  SessionManager.addMessage(activeConvId, 'user', text);
  SessionManager.updateSession(activeConvId, { context: normalizeContext(currentContext) });
  let response = null;
  switch (intent.type) {
    case 'capability_intro': response = genCapabilityIntro(); break;
    case 'diagnosis_failure': response = genDiagnosisFailure(currentContext); break;
    case 'diagnosis_slow': response = genDiagnosisSlow(currentContext); break;
    case 'diagnosis_waiting': response = genDiagnosisWaiting(currentContext); break;
    case 'diagnosis_resource': response = genDiagnosisResource(currentContext); break;
    case 'diagnosis_auto': {
      const _inf = currentContext.instanceId && INSTANCES[currentContext.instanceId];
      const _st = _inf ? _inf.status : 'Failed';
      if (_st === 'Failed') response = genDiagnosisFailure(currentContext);
      else if (_st === 'Running') response = genDiagnosisSlow(currentContext);
      else if (_st === 'Waiting') response = genDiagnosisWaiting(currentContext);
      else response = '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">Current status for instance <strong>' + (currentContext.instanceId || '') + '</strong> is <span class="status-badge success">Successful</span>, running normally, no anomalies.</div></div>';
      break;
    }
    case 'search_instances': response = genSearchInstances(intent.filter); break;
    case 'search_tasks': response = genSearchTasks(intent.filter); break;
    case 'info_dependency': response = genInfoDependency(currentContext, intent.level); break;
    case 'info_code': response = genInfoCode(currentContext); break;
    case 'info_priority': {
      if (!currentContext.taskName) {
        response = '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">Please provide the <strong>task name</strong> for priority query (e.g. <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">update_table</code>).</div></div>';
      } else {
        response = genInfoPriority(currentContext);
      }
      break;
    }
    case 'info_lineage': {
      if (currentContext.instanceId) {
        linkTo('view-instance-lineage', null, {taskName: currentContext.taskName, instanceId: currentContext.instanceId});
      } else {
        linkTo('view-lineage', null, {taskName: currentContext.taskName});
      }
      response = '__HANDLED__';
      break;
    }
    case 'info_syslog': {
      if (!currentContext.instanceId) {
        response = '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">Please provide the <strong>instance ID</strong> to view system logs (e.g. <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">di_scheduler.studio_xxx_DAY_1</code>).<br><br>You can also use <strong>Inspect</strong> to find instances first, then ask for their logs.</div></div>';
      } else {
        linkTo('view-syslog');
        response = '__HANDLED__';
      }
      break;
    }
    case 'patrol': response = genPatrol(); break;
    case 'op_rerun':
    case 'op_dqc':
    case 'op_kill':
    case 'op_skip_dep':
    case 'op_mark_success': {
      if (!currentContext.taskName && !currentContext.instanceId) {
        response = '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">Please provide the <strong>instance ID</strong> for the operation (e.g. <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">di_scheduler.studio_xxx_DAY_1</code>). I will generate an operation confirmation for you.<br><br>You can also use <strong>Inspect</strong> or <strong>Diagnose</strong> to locate specific instances first.</div></div>';
      } else {
        response = genOperationConfirm(intent, currentContext);
      }
      break;
    }
    case 'op_backfill':
    case 'op_freeze':
    case 'op_unfreeze':
    case 'op_priority':
    case 'op_trigger_now':
    case 'op_alarm': {
      if (!currentContext.taskName) {
        response = '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:10px 14px;">Please provide the <strong>task name</strong> for the operation (e.g. <code style="background:#F5F5F5;padding:1px 4px;border-radius:3px;">update_table</code>). I will generate an operation confirmation for you.</div></div>';
      } else {
        response = genOperationConfirm(intent, currentContext);
      }
      break;
    }
    case 'unsupported': response = genUnsupported(); break;
    default: response = null;
  }

  const intentLabel = {
    capability_intro: 'Capability Introduction',
    diagnosis_failure: 'Instance Failure Diagnosis', diagnosis_slow: 'Instance Slowdown Analysis', diagnosis_waiting: 'Instance Wait Analysis',
    diagnosis_resource: 'Resource Analysis', diagnosis_auto: 'Intelligent Diagnosis', search_instances: 'Instance Search', search_tasks: 'Task Search', info_dependency: 'Dependency Query', info_code: 'Code Explanation', info_priority: 'Priority Query', patrol: 'Run Inspection',
    op_rerun: 'Rerun Operation', op_backfill: 'Backfill', op_dqc: 'DQC Retry', op_priority: 'Priority Change', op_kill: 'Kill Operation', op_skip_dep: 'Skip Dependency', op_freeze: 'Freeze Operation', op_unfreeze: 'Unfreeze Operation', op_mark_success: 'Mark Success', op_trigger_now: 'Trigger Now', unsupported: 'Security Check'
  }[intent.type] || intent.type || 'general';

  var activeS = SessionManager.getSession(activeConvId);
  if (activeS && activeS.autoTitle && activeS.messages.length <= 1) {
    var autoName = intentLabel;
    if (currentContext.taskName) autoName += ' · ' + currentContext.taskName;
    else if (currentContext.instanceId) {
      var shortId = currentContext.instanceId.split('.').pop();
      autoName += ' · ' + shortId;
    }
    SessionManager.updateSession(activeConvId, { title: autoName, icon: getSessionIcon(intent.type) });
    var activeTitleEl = document.querySelector('.session-item[data-session-id="' + activeConvId + '"] .si-title');
    if (activeTitleEl) activeTitleEl.textContent = autoName;
    renderSessionTabs();
  }

  const steps = [
    { icon: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>', text: 'Identify Intent: ' + intentLabel },
    { icon: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px;"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>', text: 'Query instance runtime status' },
    { icon: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px;"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/></svg>', text: 'Generate response and suggestions' }
  ];

  var resolvedIntentType = intent.type;
  if (intent.type === 'diagnosis_auto') {
    var _inf2 = currentContext.instanceId && INSTANCES[currentContext.instanceId];
    var _st2 = _inf2 ? _inf2.status : 'Failed';
    resolvedIntentType = _st2 === 'Failed' ? 'diagnosis_failure' : _st2 === 'Running' ? 'diagnosis_slow' : _st2 === 'Waiting' ? 'diagnosis_waiting' : 'diagnosis_failure';
  }
  var followUps = genFollowUpSuggestions(resolvedIntentType, currentContext, text);
  var followUpHtml = renderFollowUpHtml(followUps);

  if (response === '__HANDLED__') {
    SessionManager.addMessage(activeConvId, 'agent', '[view opened]', '');
  } else if (response) {
    await showProcessingSteps(conv, steps);
    var _agentHtml = appendAgentMsg(conv, response, null, null, followUpHtml);
    SessionManager.addMessage(activeConvId, 'agent', response || '', _agentHtml);
  } else {
    const thinkEl = appendThinking(conv);
    const llmResult = await getOpenEndedFallbackResponse();
    thinkEl.remove();
    if (llmResult.content) {
      const html = '<div class="response-wrap"><div class="msg-bubble" style="border:none;">' + renderMarkdown(llmResult.content) + '</div></div>';
      var promptTokens = llmResult.usage ? llmResult.usage.prompt_tokens : null;
      var completionTokens = llmResult.usage ? llmResult.usage.completion_tokens : null;
      var llmFollowUps = genOpenEndedFollowUps(text, currentContext);
      var llmFollowUpHtml = renderFollowUpHtml(llmFollowUps);
      var _agentHtml2 = appendAgentMsg(conv, html, promptTokens, completionTokens, llmFollowUpHtml);
      SessionManager.addMessage(activeConvId, 'agent', llmResult.content || '', _agentHtml2);
    } else {
      var _fallback = '<div class="response-wrap"><div class="msg-bubble" style="border:none;padding:0;">Sorry, unable to process. Please try a more specific instance ID or task name.</div></div>';
      var _agentHtml3 = appendAgentMsg(conv, _fallback);
      SessionManager.addMessage(activeConvId, 'agent', 'Sorry, unable to process.', _agentHtml3);
    }
  }
  SessionManager.updateSession(activeConvId, { context: normalizeContext(currentContext) });
}

updateLineage('update_table');

// Welcome overview is now part of genPatrol() response only

/* ========== ALARM POLICY FUNCTIONS ========== */
function getLinkedTaskCount(policyName) {
  var count = 0;
  Object.values(TASK_ALARM_SETTINGS).forEach(function(settings) {
    Object.values(settings).forEach(function(v) {
      if (v === policyName) count++;
    });
  });
  return count;
}

function renderAlarmPolicyTable() {
  var tbody = document.getElementById('alarm-policy-tbody');
  if (!tbody) return;
  tbody.innerHTML = ALARM_POLICIES.map(function(p) {
    var linkedCount = getLinkedTaskCount(p.name);
    var linkedLabel = 'Linked Task';
    return '<tr>' +
      '<td><span class="ap-name">' + p.name + '</span></td>' +
      '<td><label class="toggle-sw"><input type="checkbox"' + (p.enabled ? ' checked' : '') + ' onchange="toggleAlarmPolicy(\'' + p.id + '\',this.checked)"/><span class="slider"></span></label></td>' +
      '<td>' + p.trigger + '</td>' +
      '<td>' + p.channel + '</td>' +
      '<td>' + p.recipient + '</td>' +
      '<td>' + p.modified + '</td>' +
      '<td><span class="act-link" onclick="openLinkedTaskModal(\'' + p.name.replace(/'/g, "\\'") + '\')">' + linkedLabel + '</span><span class="act-link">Log</span><span class="act-link">Edit</span><span class="act-link danger">Delete</span></td>' +
      '</tr>';
  }).join('');
}

function toggleAlarmPolicy(id, val) {
  var p = ALARM_POLICIES.find(function(x) { return x.id === id; });
  if (p) p.enabled = val;
}

function getLinkedTasks(policyName) {
  var linked = [];
  Object.entries(TASK_ALARM_SETTINGS).forEach(function(e) {
    var taskName = e[0], settings = e[1];
    Object.values(settings).forEach(function(v) {
      if (v === policyName) {
        var t = TASKS[taskName] || {};
        if (!linked.find(function(l) { return l.name === taskName; })) {
          linked.push({ name: taskName, code: t.code || '', owner: t.owner || '' });
        }
      }
    });
  });
  return linked;
}

function openLinkedTaskModal(policyName) {
  var linked = getLinkedTasks(policyName);
  var tbody = document.getElementById('linked-task-tbody');
  var footer = document.getElementById('linked-task-footer');
  if (tbody) {
    if (linked.length === 0) {
      tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;color:#8C8C8C;padding:30px;">No linked tasks</td></tr>';
    } else {
      tbody.innerHTML = linked.map(function(l) {
        return '<tr>' +
          '<td><span style="color:#1890FF;cursor:pointer;" onclick="navToTask(\'' + l.name + '\');closeLinkedTaskModal();">' + l.code + '</span></td>' +
          '<td>' + l.name + '</td>' +
          '<td>' + l.owner + '</td>' +
          '</tr>';
      }).join('');
    }
  }
  if (footer) {
    footer.innerHTML = linked.length + ' Search Results &nbsp; <span style="color:#D9D9D9;">&lt;</span> <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border:1px solid #1890FF;border-radius:3px;color:#1890FF;font-size:12px;">1</span> <span style="color:#D9D9D9;">&gt;</span> &nbsp; 10 / page';
  }
  document.getElementById('lt-tab-linked').classList.add('active');
  document.getElementById('lt-tab-log').classList.remove('active');
  document.getElementById('lt-tab-content-linked').style.display = '';
  document.getElementById('lt-tab-content-log').style.display = 'none';
  document.getElementById('linkedTaskModal').classList.remove('hidden');
}

function closeLinkedTaskModal() {
  document.getElementById('linkedTaskModal').classList.add('hidden');
}

function switchLinkedTab(tab) {
  document.getElementById('lt-tab-linked').classList.toggle('active', tab === 'linked');
  document.getElementById('lt-tab-log').classList.toggle('active', tab === 'log');
  document.getElementById('lt-tab-content-linked').style.display = tab === 'linked' ? '' : 'none';
  document.getElementById('lt-tab-content-log').style.display = tab === 'log' ? '' : 'none';
}

function openNewPolicyModal() {
  document.getElementById('newAlarmModal').classList.remove('hidden');
}

function closeNewPolicyModal() {
  document.getElementById('newAlarmModal').classList.add('hidden');
}

function saveNewPolicy() {
  var name = document.getElementById('modal-policy-name').value.trim();
  if (!name) { alert('Please enter alarm policy name'); return; }
  var trigger = document.getElementById('modal-trigger').value;
  var channel = document.getElementById('modal-channel').value;
  ALARM_POLICIES.unshift({
    id: 'ap_' + Date.now(),
    name: name,
    enabled: true,
    trigger: trigger,
    channel: channel,
    recipient: 'Task Owner',
    owner: 'current.user@shopee.com',
    modified: new Date().toISOString().replace('T', ' ').slice(0, 19)
  });
  renderAlarmPolicyTable();
  closeNewPolicyModal();
  document.getElementById('modal-policy-name').value = '';
}

var triggerHints = {
  'Task Failure': "Trigger when the task instance status becomes 'Failed'",
  'Task Attempt Failure': "Trigger when the task attempt fails",
  'Input Overtime': "Trigger when dependencies are not met after scheduled time",
  'Output Overtime': "Trigger when task is not completed after scheduled time",
  'Running Duration Overtime': "Trigger when task running duration exceeds threshold",
  'Task Success': "Trigger when the task instance status becomes 'Successful'",
  'Upstream Frequency Change': "Trigger when upstream task frequency changes",
  'Cascade Rerun': "Trigger when a cascade rerun event occurs",
  'Upstream Task Failure': "Trigger when upstream task fails",
  'Runtime Anomaly Alert': "Trigger when runtime anomaly is detected"
};

var triggerSel = document.getElementById('modal-trigger');
if (triggerSel) {
  triggerSel.addEventListener('change', function() {
    var hint = document.getElementById('modal-trigger-hint');
    if (hint) hint.textContent = triggerHints[this.value] || '';
  });
}

function renderAlarmSetting(taskName) {
  var list = document.getElementById('alarm-type-list');
  if (!list) return;
  var settings = TASK_ALARM_SETTINGS[taskName] || {};
  var descMap = {
    'Input Overtime': 'Send alarm if dependency is not met 1min after the task scheduled time.\nOnly applicable to scheduled instances. Manual trigger, backfill, and rerun won\'t have this alarm.',
    'Output Overtime': 'Send alarm if task is not completed at 3min after the scheduled time.\nOnly applicable to scheduled instances. Manual trigger, backfill, and rerun won\'t have this alarm.',
    'Running Duration Overtime': 'Send alarm if task running duration > 1min'
  };
  list.innerHTML = ALARM_TRIGGER_TYPES.map(function(type) {
    var policyName = settings[type];
    var desc = descMap[type] || '';
    var valueHtml = '';
    if (policyName) {
      valueHtml = '<span class="policy-link" onclick="switchView(\'view-alarm-policy\')">' + policyName + '</span>' +
        '<span class="policy-unlink" title="Unlink">&#128203;</span>';
      if (desc) {
        valueHtml += '<div class="policy-desc">' + desc.replace(/\n/g, '<br>') + '</div>';
      }
    } else {
      valueHtml = '<select class="policy-select" onchange="assignAlarmPolicy(\'' + taskName + '\',\'' + type + '\',this.value)">' +
        '<option value="">Please select alarm policy</option>';
      ALARM_POLICIES.forEach(function(p) {
        if (p.trigger === type) {
          valueHtml += '<option value="' + p.name + '">' + p.name + '</option>';
        }
      });
      valueHtml += '</select>';
      if (desc) {
        valueHtml += '<div class="policy-desc">' + desc.replace(/\n/g, '<br>') + '</div>';
      }
    }
    return '<div class="alarm-type-row">' +
      '<div class="alarm-type-label">' + type + ' <span class="info-ico">&#9432;</span></div>' +
      '<div class="alarm-type-value">' + valueHtml + '</div>' +
      '</div>';
  }).join('');
}

function assignAlarmPolicy(taskName, triggerType, policyName) {
  if (!policyName) return;
  if (!TASK_ALARM_SETTINGS[taskName]) TASK_ALARM_SETTINGS[taskName] = {};
  TASK_ALARM_SETTINGS[taskName][triggerType] = policyName;
  renderAlarmSetting(taskName);
}

renderAlarmPolicyTable();
renderAlarmSetting(currentContext.taskName || 'update_table');

// Initialize Session Manager
if (new URLSearchParams(window.location.search).has('reset')) {
  localStorage.removeItem(SESSION_STORAGE_KEY);
  localStorage.removeItem('ops-agent-panel-visible');
  window.history.replaceState({}, '', window.location.pathname);
}
SessionManager.init();
renderSessionTabs();

// Populate conv-welcome with the unified welcome card
(function() {
  var wc = document.getElementById('conv-welcome');
  if (wc && wc.children.length === 0) wc.innerHTML = buildWelcomeCardHtml();
})();

// Populate preset backfill card with dynamic content
(function() {
  var body = document.getElementById('preset-backfill-body');
  if (body) {
    var cardHtml = genOperationConfirm(
      { type: 'op_backfill', level: 'task' },
      { taskName: 'update_table', taskCode: 'di_scheduler.studio_6801187', instanceId: null }
    );
    body.innerHTML = cardHtml + getMsgActionsHtml();
  }
})();

// Populate conv-large-dep with generated dependency content
(function() {
  var el = document.getElementById('msg-large-dep-content');
  if (el) {
    var ctx = { taskName: 'etl_data_warehouse', instanceId: null };
    var html = genInfoDependency(ctx, 'task');
    var actionsEl = el.querySelector('.msg-actions');
    if (actionsEl) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      el.insertBefore(wrapper, actionsEl);
    } else {
      el.insertAdjacentHTML('afterbegin', html);
    }
  }
})();

// Restore agent panel visibility state
(function() {
  var saved = localStorage.getItem('ops-agent-panel-visible');
  if (saved === '0') {
    setAgentPanelVisible(false);
  } else {
    setAgentPanelVisible(true);
  }
})();

// Restore last active session or show welcome
(function () {
  var params = new URLSearchParams(window.location.search);
  var diagnoseParam = params.get('diagnose');
  var hash = window.location.hash || '';
  var shareMatch = hash.match(/(?:^#|&)share=([^&]+)/);
  var isSharedView = params.get('shared') === '1';

  if (shareMatch && isSharedView) {
    try {
      enterSharedMode(decodeSharePayload(shareMatch[1]), shareMatch[1]);
    } catch (e) {
      showToast('Invalid shared link');
    }
  } else if (shareMatch) {
    try {
      var importedSessionId = importSharedSession(decodeSharePayload(shareMatch[1]));
      switchSessionById(importedSessionId);
      showToast('Shared chat imported');
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, '', window.location.pathname + window.location.search);
      }
    } catch (e) {
      showToast('Invalid shared link');
    }
  } else if (diagnoseParam) {
    var sess = SessionManager.createSession(null, 'Diagnosis', 'diagnosis');
    var conv = document.createElement('div');
    conv.className = 'conv-container active';
    conv.id = sess.id;
    document.querySelectorAll('.conv-container').forEach(function (c) { c.classList.remove('active'); });
    var inputArea = document.querySelector('.input-area');
    inputArea.parentNode.insertBefore(conv, inputArea);
    setTimeout(function () { simulateSendWithText('Diagnose instance ' + diagnoseParam); }, 500);
  } else if (SessionManager.data.activeSessionId && SessionManager.data.activeSessionId !== 'conv-welcome') {
    var lastActive = SessionManager.getSession(SessionManager.data.activeSessionId);
    if (lastActive) {
      switchSessionById(SessionManager.data.activeSessionId);
    }
  }
})();

// Dynamically populate Scheduled Tasks table from TASKS
function renderTaskListTable() {
  var tbody = document.getElementById('task-list-tbody');
  var countEl = document.getElementById('task-list-count');
  if (!tbody) return;
  var editSvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
  var copySvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
  var html = '';
  var entries = Object.entries(TASKS);
  var idx = 0;
  entries.forEach(function(e) {
    var name = e[0], t = e[1];
    var insts = Object.entries(INSTANCES).filter(function(i) { return i[1].task === name; });
    var hasFailed = insts.some(function(i) { return i[1].status === 'Failed'; });
    var rowBg = hasFailed ? ' style="background:#FFF1F0;"' : '';
    var dot = hasFailed ? '<svg width="14" height="14" viewBox="0 0 16 16" style="vertical-align:middle;margin-right:4px;"><circle cx="8" cy="8" r="5" fill="#FF4D4F" opacity=".15"/><circle cx="8" cy="8" r="3" fill="#FF4D4F"/></svg>' : '';
    var h = 2 + (idx * 37 % 9);
    var m = (idx * 53 % 60);
    var s = (idx * 17 % 60);
    var lastExec = insts.length > 0 ? '2026-04-03 ' + String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') : '-';
    idx++;
    html += '<tr' + rowBg + '><td><input type="checkbox" style="accent-color:#1890FF"/></td>' +
      '<td>' + dot + '<a class="link" onclick="navToTask(\'' + name + '\')">' + name + '</a></td>' +
      '<td>' + (t.code || '-') + '</td>' +
      '<td>' + (t.workflow || '-') + '</td>' +
      '<td>' + lastExec + '</td>' +
      '<td>' + (t.owner || '-') + '</td>' +
      '<td><div class="action-cell"><button class="act-btn" title="Edit">' + editSvg + '</button><button class="act-btn" title="Copy">' + copySvg + '</button><button class="act-btn">···</button></div></td></tr>';
  });
  tbody.innerHTML = html;
  if (countEl) countEl.textContent = entries.length + ' Results';
}

// Dynamically populate All Instances table from INSTANCES
function renderAllInstancesTable() {
  var tbody = document.getElementById('ai-instance-tbody');
  var countEl = document.getElementById('ai-instance-count');
  if (!tbody) return;
  var rerunSvg = '⟳';
  var copySvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
  var html = '';
  var entries = Object.entries(INSTANCES);
  var statusOrder = { 'Failed': 0, 'Running': 1, 'Waiting': 2, 'Successful': 3 };
  entries.sort(function(a, b) { return (statusOrder[a[1].status] || 9) - (statusOrder[b[1].status] || 9); });
  var iIdx = 0;
  entries.forEach(function(e) {
    var id = e[0], inst = e[1];
    var bc = inst.status === 'Failed' ? 'failed' : inst.status === 'Running' ? 'running' : inst.status === 'Waiting' ? 'waiting' : 'success';
    var rowBg = inst.status === 'Failed' ? ' style="background:#FFF1F0;"' : '';
    var hour = 2 + (iIdx * 31 % 9);
    var bTime = '2026-04-03 ' + String(hour).padStart(2, '0') + ':00:00';
    var cTime = '2026-04-03 ' + String(hour).padStart(2, '0') + ':00:01';
    iIdx++;
    html += '<tr data-status="' + inst.status + '"' + rowBg + '><td><input type="checkbox" style="accent-color:#1890FF"/></td>' +
      '<td>' + inst.task + '</td>' +
      '<td><a class="link" onclick="navToInstance(\'' + id + '\')">' + id + '</a></td>' +
      '<td><span class="status-badge ' + bc + '">' + inst.status + '</span></td>' +
      '<td>Schedule</td>' +
      '<td>' + bTime + '</td>' +
      '<td>' + cTime + '</td>' +
      '<td><div class="action-cell"><button class="act-btn">' + rerunSvg + '</button><button class="act-btn">' + copySvg + '</button><button class="act-btn">···</button></div></td></tr>';
  });
  tbody.innerHTML = html;
  if (countEl) countEl.textContent = entries.length + ' Search Results';
}

renderTaskListTable();
renderAllInstancesTable();

window.addEventListener('beforeunload', function () {
  SessionManager.save();
});

window.addEventListener('resize', function () { setTimeout(updateMoreBtn, 100); });

document.addEventListener('click', function (e) {
  var mdd = document.getElementById('stbMoreDropdown');
  var mbtn = document.getElementById('stbMoreBtn');
  if (mdd && mdd.classList.contains('open') && !mdd.contains(e.target) && e.target !== mbtn && !mbtn.contains(e.target)) {
    closeMoreTabs();
  }
});
