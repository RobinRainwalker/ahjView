import React, { Component } from 'react';
import Ahjs from './components/Ahjs';
import Ahj from './components/Ahj';
import Navigation from './components/Navigation';
import 'bootstrap/less/bootstrap.less';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor() {
    super();


    this.state = {
      ahjs: [],
      ahj: [],
      mode: '',
      current: false,
      // value: '',
      url: 'https://ahjbackend.herokuapp.com',
      results: [],
      searchName: '',
      searchState: '',
      searchCounty: '',
      searchBuildingDepartmentAddress: '',
      searchBuildingDepartmentContact: '',
      searchBuildingDepartmentWebsite: '',
      searchBuildingInspectionSummary: '',
      searchPermitApprovedMean: '',
      searchPermitReceivedMin: '',
      searchPermitScopes: '',
      searchPermittingHours: '',
      searchPermitFee: '',
      searchRoofClearanceNotes: '',
      searchPlansetCopiesRequired: '',
      searchAdditionalPermitNotes: '',
      searchSecondaryPhone: '',
      searchZoningOfficePhone: '',
      searchAHJEmail: '',
      searchAHJNotes: '',
      searchAHJSummary: '',
      searchCode: '',
      searchGISPortal: '',
      searchFireMarshallContact: '',
      searchFireDepartmentPhone: '',
      searchFireDepartmentAddress: '',
      searchOnlinePermittingRequired: '',
      searchPrimaryPhone: '',
      searchX48HourNotice: '',
      searchExtension: '',
      searchElectricalInspectionNotes: '',
    }
  }

  componentDidMount() {
    this.getAhjs();
  }

  getAhjs() {
    axios.get(this.state.url)
      .then(data => {
        this.setState({
          mode: "ahjs",
          ahjs: data.data.ahjs
        });
      })
  }

  clickHomePage() {
    this.setState({
      mode: "ahjs"
    })
    this.renderView();
  }

  clickAhjHandler(event, ahjId) {
    event.preventDefault();
    axios.get(`${this.state.url}/${ahjId}`)
      .then(data => {
        console.log(data)
        this.setState({
          ahj: data.data,
          shownAhjId: ahjId,
          mode: "ahj"
        }, () => {
         console.log(this.state) 
         this.renderView();
        })
      })
  }

  handleSubmit(event) {
    // event.preventDefault();

    let url = this.state.url + '/' + this.state.shownAhjId + '?';

    let components = 0;

    // one for each patch parameter we want, replace searchName
    // with search + propName
    if (this.state.searchName !== '' && this.state.searchName !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Name=' + this.state.searchName;
      components++
    } 
    if (this.state.searchState !== '' && this.state.searchState !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'State__c=' + this.state.searchState;
      components++
    }
    if (this.state.searchCounty !== '' && this.state.searchCounty !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'County__c=' + this.state.searchCounty;
      components++
    }
    if (this.state.searchBuildingDepartmentAddress !== '' && this.state.searchBuildingDepartmentAddress !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Building_Department_Address__c=' + this.state.searchBuildingDepartmentAddress;
      components++
    }
    if (this.state.searchBuildingDepartmentContact !== '' && this.state.searchBuildingDepartmentContact !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Building_Department_Contact__c=' + this.state.searchBuildingDepartmentContact;
      components++
    } 
    if (this.state.searchBuildingDepartmentWebsite !== '' && this.state.searchBuildingDepartmentWebsite !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Building_Department_Website__c=' + this.state.searchBuildingDepartmentWebsite;
      components++
    } 
    if (this.state.searchBuildingDepartmentWebsite !== '' && this.state.searchBuildingDepartmentWebsite !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Building_Department_Website__c=' + this.state.searchBuildingDepartmentWebsite;
      components++
    } 
    if (this.state.searchBuildingInspectionSummary !== '' && this.state.searchBuildingInspectionSummary !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Building_Inspection_Summary__c=' + this.state.searchBuildingInspectionSummary;
      components++
    } 
    if (this.state.searchPermitApprovedMean !== '' && this.state.searchPermitApprovedMean !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Permit_Approved_Mean__c=' + this.state.searchPermitApprovedMean;
      components++
    } 
    if (this.state.searchPermitReceivedMin !== '' && this.state.searchPermitReceivedMin !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Permit_Received_Min__c=' + this.state.searchPermitReceivedMin;
      components++
    } 
    if (this.state.searchPermitScopes !== '' && this.state.searchPermitScopes !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Permit_Scopes__c=' + this.state.searchPermitScopes;
      components++
    } 
    if (this.state.searchPermittingHours !== '' && this.state.searchPermittingHours !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Permitting_Hours__c=' + this.state.searchPermittingHours;
      components++
    } 
    if (this.state.searchPermitFee !== '' && this.state.searchPermitFee !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Permit_Fee__c=' + this.state.searchPermitFee;
      components++
    } 
    if (this.state.searchRoofClearanceNotes !== '' && this.state.searchRoofClearanceNotes !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Roof_Clearance_Notes__c=' + this.state.searchRoofClearanceNotes;
      components++
    } 
    if (this.state.searchPlansetCopiesRequired !== '' && this.state.searchPlansetCopiesRequired !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Planset_Copies_Required__c=' + this.state.searchPlansetCopiesRequired;
      components++
    }
    if (this.state.searchAdditionalPermitNotes !== '' && this.state.searchAdditionalPermitNotes !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Additional_Permit_Notes__c=' + this.state.searchAdditionalPermitNotes;
      components++
    } 
    if (this.state.searchSecondaryPhone !== '' && this.state.searchSecondaryPhone !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Secondary_Phone__c=' + this.state.searchSecondaryPhone;
      components++
    } 
    if (this.state.searchZoningOfficePhone !== '' && this.state.searchZoningOfficePhone !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Zoning_Office_Phone__c=' + this.state.searchZoningOfficePhone;
      components++
    } 
    if (this.state.searchAHJEmail !== '' && this.state.searchAHJEmail !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'AHJ_Email__c=' + this.state.searchAHJEmail;
      components++
    } 
    if (this.state.searchAHJNotes !== '' && this.state.searchAHJNotes !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'AHJ_Notes__c=' + this.state.searchAHJNotes;
      components++
    } 
    if (this.state.searchAHJSummary !== '' && this.state.searchAHJSummary !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'AHJ_Summary__c=' + this.state.searchAHJSummary;
      components++
    } 
    if (this.state.searchCode !== '' && this.state.searchCode !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Code__c=' + this.state.searchCode;
      components++
    } 
    if (this.state.searchGISPortal !== '' && this.state.searchGISPortal !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'GIS_Portal__c=' + this.state.searchGISPortal;
      components++
    } 
    if (this.state.searchFireMarshallContact !== '' && this.state.searchFireMarshallContact !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Fire_Marshal_Contact__c=' + this.state.searchFireMarshallContact;
      components++
    } 
    if (this.state.searchFireDepartmentPhone !== '' && this.state.searchFireDepartmentPhone !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Fire_Department_Phone__c=' + this.state.searchFireDepartmentPhone;
      components++
    } 
    if (this.state.searchFireDepartmentAddress !== '' && this.state.searchFireDepartmentAddress !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Fire_Department_Address__c=' + this.state.searchFireDepartmentAddress;
      components++
    } 
    if (this.state.searchOnlinePermittingRequired !== '' && this.state.searchOnlinePermittingRequired !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Online_Permitting_Required__c=' + this.state.searchOnlinePermittingRequired;
      components++
    } 
    if (this.state.searchPrimaryPhone !== '' && this.state.searchPrimaryPhone !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Primary_Phone__c=' + this.state.searchPrimaryPhone;
      components++
    } 
    if (this.state.searchX48HourNotice !== '' && this.state.searchX48HourNotice !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'X48_Hour_Notice__c=' + this.state.searchX48HourNotice;
      components++
    } 
    if (this.state.searchExtension !== '' && this.state.searchExtension !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Extension__c=' + this.state.searchExtension;
      components++
    } 
    if (this.state.searchElectricalInspectionNotes !== '' && this.state.searchElectricalInspectionNotes !== null) {
      if (components > 0) {
        url += '&';
      }
      url += 'Electrical_Inspection_Notes__c=' + this.state.searchElectricalInspectionNotes;
      components++
    } 




    // encode the URI for good measure to deal with spaces.
    url = encodeURI(url)
    // console.log("this.state.searchState", this.state.searchState)
    // console.log("components", components)
    // console.log(url)
    
    // make the patch request, then rerender the view so
    // the user can see their changes,
    // or log the error out
    axios.patch(url)
      .then((res) => {
        this.renderView()
      }).catch((e) => {
        console.error(e);
      })

  }

  handleNameChange(e) {
    this.setState({
      searchName: e.target.value
    })
  }

  handleStateChange(e) {
    this.setState({
      searchState: e.target.value
    })
  }

  handleCountyChange(e) {
    this.setState({
      searchCounty: e.target.value
    })
  }

  handleBuildingDepartmentAddressChange(e) {
    this.setState({
      searchBuildingDepartmentAddress: e.target.value
    })
  }

  handleBuildingDepartmentContactChange(e) {
    this.setState({
      searchBuildingDepartmentContact: e.target.value
    })
  }

  handleBuildingDepartmentWebsiteChange(e) {
    this.setState({
      searchBuildingDepartmentWebsite: e.target.value
    })
  }

  handleBuildingInspectionSummaryChange(e) {
    this.setState({
      searchBuildingInspectionSummary: e.target.value
    })
  }

   handlePermitApprovedMeanChange(e) {
    this.setState({
      searchPermitApprovedMean: e.target.value
    })
  }

  handlePermitReceivedMinChange(e) {
    this.setState({
      searchPermitReceivedMin: e.target.value
    })
  }

  handlePermitScopesChange(e) {
    this.setState({
      searchPermitScopes: e.target.value
    })
  }

  handlePermittingHoursChange(e) {
    this.setState({
      searchPermittingHours: e.target.value
    })
  }

  handlePermitFeeChange(e) {
    this.setState({
      searchPermitFee: e.target.value
    })
  }

  handleRoofClearanceNotesChange(e) {
    this.setState({
      searchRoofClearanceNotes: e.target.value
    })
  }

  handlePlansetCopiesRequiredChange(e) {
    this.setState({
      searchPlansetCopiesRequired: e.target.value
    })
  }

  handleAdditionalPermitNotesChange(e) {
    this.setState({
      searchAdditionalPermitNotes: e.target.value
    })
  }

  handleSecondaryPhoneChange(e) {
    this.setState({
      searchSecondaryPhoneChange: e.target.value
    })
  }

  handleZoningOfficePhoneChange(e) {
    this.setState({
      searchZoningOfficePhone: e.target.value
    })
  }

  handleAHJEmailChange(e) {
    this.setState({
      searchAHJEmail: e.target.value
    })
  }

  handleAHJNotesChange(e) {
    this.setState({
      searchAHJNotes: e.target.value
    })
  }

  handleAHJSummaryChange(e) {
    this.setState({
      searchAHJSummary: e.target.value
    })
  }

  handleCodeChange(e) {
    this.setState({
      searchCode: e.target.value
    })
  }

  handleGISPortalChange(e) {
    this.setState({
      searchGISPortal: e.target.value
    })
  }

  handleFireMarshallContactChange(e) {
    this.setState({
      searchFireMarshallContact: e.target.value
    })
  }

  handleFireDepartmentPhoneChange(e) {
    this.setState({
      searchFireDepartmentPhone: e.target.value
    })
  }

  handleFireDepartmentAddressChange(e) {
    this.setState({
      searchFireDepartmentAddress: e.target.value
    })
  }

  handleOnlinePermittingRequiredChange(e) {
    this.setState({
      searchOnlinePermittingRequired: e.target.value
    })
  }

  handlePrimaryPhoneChange(e) {
    this.setState({
      searchPrimaryPhone: e.target.value
    })
  }

 handleX48HourNoticeChange(e) {
    this.setState({
      searchX48HourNotice: e.target.value
    })
  }

  handleExtensionChange(e) {
    this.setState({
      searchExtension: e.target.value
    })
  }

  handleElectricalInspectionNotesChange(e) {
    this.setState({
      searchElectricalInspectionNotes: e.target.value
    })
  }


  renderView() {
    console.log(this.state.mode)
    if (this.state.mode === "ahjs") {
      // console.log('ahjs')
      return(<Ahjs 
        ahjs={this.state.ahjs}
        clickAhjHandler={this.clickAhjHandler.bind(this)}
      />)
    } 
    else if (this.state.mode === "ahj") {
      return(<Ahj 
        ahj={this.state.ahj}
        handleSubmit={this.handleSubmit.bind(this)}
        handleNameChange={this.handleNameChange.bind(this)}
        handleStateChange={this.handleStateChange.bind(this)}
        handleCountyChange={this.handleCountyChange.bind(this)}
        handleBuildingDepartmentAddressChange={this.handleBuildingDepartmentAddressChange.bind(this)}
        handleBuildingDepartmentContactChange={this.handleBuildingDepartmentContactChange.bind(this)}
        handleBuildingDepartmentWebsiteChange={this.handleBuildingDepartmentWebsiteChange.bind(this)}
        handleBuildingInspectionSummaryChange={this.handleBuildingInspectionSummaryChange.bind(this)}
        handlePermitApprovedMeanChange={this.handlePermitApprovedMeanChange.bind(this)}
        handlePermitReceivedMinChange={this.handlePermitReceivedMinChange.bind(this)}
        handlePermitScopesChange={this.handlePermitScopesChange.bind(this)}
        handlePermittingHoursChange={this.handlePermittingHoursChange.bind(this)}
        handlePermitFeeChange={this.handlePermitFeeChange.bind(this)}
        handleRoofClearanceNotesChange={this.handleRoofClearanceNotesChange.bind(this)}
        handlePlansetCopiesRequiredChange={this.handlePlansetCopiesRequiredChange.bind(this)}
        handleAdditionalPermitNotesChange={this.handleAdditionalPermitNotesChange.bind(this)}
        handleSecondaryPhoneChange={this.handleSecondaryPhoneChange.bind(this)}
        handleZoningOfficePhoneChange={this.handleZoningOfficePhoneChange.bind(this)}
        handleAHJEmailChange={this.handleAHJEmailChange.bind(this)}
        handleAHJNotesChange={this.handleAHJNotesChange.bind(this)}
        handleAHJSummaryChange={this.handleAHJSummaryChange.bind(this)}
        handleCodeChange={this.handleCodeChange.bind(this)}
        handleGISPortalChange={this.handleGISPortalChange.bind(this)}
        handleFireMarshallContactChange={this.handleFireMarshallContactChange.bind(this)}
        handleFireDepartmentPhoneChange={this.handleFireDepartmentPhoneChange.bind(this)}
        handleFireDepartmentAddressChange={this.handleFireDepartmentAddressChange.bind(this)}
        handleOnlinePermittingRequiredChange={this.handleOnlinePermittingRequiredChange.bind(this)}
        handlePrimaryPhoneChange={this.handlePrimaryPhoneChange.bind(this)}
        handleX48HourNoticeChange={this.handleX48HourNoticeChange.bind(this)}
        handleExtensionChange={this.handleExtensionChange.bind(this)}
        handleElectricalInspectionNotesChange={this.handleElectricalInspectionNotesChange.bind(this)}
        />)
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navigation
          clickHomePage={this.clickHomePage.bind(this)}
        />
        {this.renderView()}
      </div>
    );
  }
}

export default App;
