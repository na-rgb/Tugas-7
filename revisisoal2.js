const fs = require('fs');

const payload = '
0o3/22 08:54:24 ;INFO   :......rsvp_flow_stateMachine: state RESVED, event T1OUT
0o3/22 08:54:24 ;TRACE  :.......rsvp_action_nHop: constructing a PATH
0o3/22 08:54:24 ;TRACE  :.......flow_timer_start: started T1
0o3/22 08:54:24 ;TRACE  :......rsvp_flow_stateMachine: reentering state RESVED
0o3/22 08:54:24 ;TRACE  :.......mailslot_send; sending to (9.67.116.99;0)
0o3/22 08:54:35 ;TRACE  :......rsvp_event_mapSession: Session=9.67.116.99:1047:6 exists
 24 
0o3/22 08:54:35 ;EVENT  :.....api_reader: api request SENDER_WITHDRAW
0o3/22 08:54:35 ;INFO   :.......rsvp_flow_stateMachine: state RESVED, event PATHTEAR
 25 
0o3/22 08:54:35 ;TRACE  :........traffic_action_oif: is to remove filter
0o3/22 08:54:35 ;INFO   :.........qosmgr_request: Ioctl to remove reservation successful
0o3/22 08:54:35 ;INFO   :..........rpapi_Reg_UnregFlow: RSVPRemActionName:  Entering

0o3/22 08:54:35 ;INFO   :..........rpapi_Reg_UnregFlow: ReadBuffer:  Entering

0o3/22 08:54:35 ;INFO   :..........rpapi_Reg_UnregFlow: ReadBuffer:  Exiting

0o3/22 08:54:35 ;INFO   :..........rpapi_Reg_UnregFlow: RSVPRemActionName:  Result = 0

0o3/22 08:54:35 ;INFO   :..........rpapi_Reg_UnregFlow: RSVPRemActionName:  Exiting

0o3/22 08:54:35 ;INFO   :..........rpapi_Reg_UnregFlow: flow[sess=9.67.116.99:1047:6, 
source=9.67.116.98:8000] unregistered from CLCat2
0o3/22 08:54:35 ;EVENT  :..........qosmgr_response: DELRESP from qosmgr, reason=0, qoshandle=0
0o3/22 08:54:35 ;INFO   :..........qosmgr_response: src-9.67.116.98:8000 dst-9.67.116.99:1047 proto-6
0o3/22 08:54:35 ;TRACE  :...........traffic_reader: tc response msg=3, status=1
 26 
0o3/22 08:54:35 ;TRACE  :........rsvp_action_nHop: constructing a PATHTEAR
0o3/22 08:54:35 ;TRACE  :........flow_timer_stop: stopped T1
0o3/22 08:54:35 ;TRACE  :........flow_timer_stop: Stop T4
 27 
0o3/22 08:54:35 ;TRACE  :.......rsvp_flow_stateMachine: entering state SESSIONED
0o3/22 08:54:35 ;TRACE  :........mailslot_send: sending to (9.67.116.99:0)
0o3/22 08:54:35 ;TRACE  :......rsvp_event_propagate: flow[session=9.67.116.99:1047:6, 
source=9.67.116.98:8000] ceased
 28 
0o3/22 08:54:35 ;EVENT  :api_reader: api request CLOSE
0o3/22 08:54:35 ;INFO   :rsvp_flow_stateMachine: state SESSIONED, event PATHTEAR
0o3/22 08:54:35 ;PROTERR:.......rsvp_flow_stateMachine: state SESSIONED does not expect event PATHTEAR
 29 
0o3/22 08:54:53 ;EVENT  :..mailslot_sitter: process received signal SIGTERM
0o3/22 08:54:53 ;INFO   :...check_signals: received TERM signal
0o3/22 08:54:53 ;INFO   :......term_policyAPI: UnRegisterFromPolicyAPI:  Entering

0o3/22 08:54:53 ;INFO   :......term_policyAPI: ReadBuffer:  Entering

0o3/22 08:54:53 ;INFO   :......term_policyAPI: ReadBuffer:  Exiting

0o3/22 08:54:53 ;INFO   :......term_policyAPI: UnRegisterFromPolicyAPI:  Result = 0

0o3/22 08:54:53 ;INFO   :......term_policyAPI: UnRegisterFromPolicyAPI:  Exiting

0o3/22 08:54:53 ;INFO   :......term_policyAPI: APITerminate:  Entering

0o3/22 08:54:53 ;INFO   :......term_policyAPI: APITerminate:  Exiting

0o3/22 08:54:53 ;INFO   :......term_policyAPI: Policy API terminated
0o3/22 08:54:53 ;INFO   :......dreg_process: deregistering process with the system
0o3/22 08:54:53 ;INFO   :......dreg_process: attempt to dereg (ifaeddrg_byaddr)
0o3/22 08:54:53 ;INFO   :......dreg_process: rc from ifaeddrg_byaddr  rc =0
0o3/22 08:54:53 ;INFO   :.....terminator: process terminated with exit code 0'


//write file
fs.writeFile("log.txt", payload, (err)) => {
  if (err) console.log(err);
  console.log("successfully written to file");
};

//read file
fs.readFile("log.txt", "utf-8", (err,data)) => {
  if (err) {console.log(err)}
  console.log(data);
}
