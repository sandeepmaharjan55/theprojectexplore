// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import InputPasswordToggle from "@components/input-password-toggle";
// ** Table Data & Columns
import axios, * as others from "axios";
import config from "@src/configs/config";
import Toast from "@src/@core/components/Toast";
import { toast } from "react-toastify";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";
import DataTable from "react-data-table-component";
import {
  ChevronDown,
  Trash,
  Check,
  X,
  File,
  Edit,
  Copy,
  Plus,
} from "react-feather";
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Row,
  Form,
  CustomInput,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  UncontrolledTooltip,
} from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const MySwal = withReactContent(Swal);

const DestinationEventManage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  // ** States
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [dataDestination, setDataDestination] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [_id, setId] = useState(0);
  const [galleryImage, setGalleryImage] = useState("");
  const [destination, setDestinationName] = useState("");
  // console.log(destination);
  const [title, setDestinationEventTitle] = useState("");
  const [subTitle, setDestinationEventSubTitle] = useState("");
  const [desC, setDestinationEventDesc] = useState("");
  const [startDate, setDestinationEventStartDate] = useState("");
  const [endDate, setDestinationEventEndDate] = useState("");
  //   console.log(title);
  // console.log(startDate);
  // console.log(endDate);
  // const [slug, setSlug] = useState('')
  const [reload, setReload] = useState(new Date());

  // ** Function to handle Modal toggle
  const handleModal = () => {
    setDestinationName();
    // setSlug()
    setModal(!modal);
  };
  // , row.title, row.subTitle, row.desC, row.startDate, row.endDate, row.status, row.bestSeasons, row.accomodation, row.maxAltitude
  const handleEdit = (row) => {
    setId(row._id)
    // console.log(row.destination);
    setDestinationName(row.destination);
    setDestinationEventTitle(row.title);
    setDestinationEventSubTitle(row.subTitle);
    setDestinationEventDesc(row.desC);
    setDestinationEventStartDate(row.startDate);
    setDestinationEventEndDate(row.endDate);
    // setSlug(row.slug)
    setEditModal(!editModal);
  };

  const saveDestinationEvent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("imageFileUrl", galleryImage);
    // console.log(formData);
    axios
      .post(`${config.baseUrl}/destinationevent/store`, formData, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: userData.token,
        },
      })
      .then(function (response) {
        setModal(!modal);
        setReload(new Date());
        toast.success(
          <Toast
            title="Destination Saved Successfully!!"
            text=""
            type="Success"
          />,
          { autoClose: 3000, hideProgressBar: true }
        );
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404)
          toast.error(
            <Toast
              title={error.response.data.message}
              text={error.response.data.message}
              type="Error"
            />,
            { autoClose: 3000, hideProgressBar: true }
          );
        else
          toast.error(
            <Toast title="Some Error Occurred" text="" type="Error" />,
            { autoClose: 3000, hideProgressBar: true }
          );
      });
  };

  const editDestinationEvent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post(`${config.baseUrl}/destinationevent/edit`, formData, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: userData.token,
        },
      })
      .then(function (response) {
        setEditModal(!editModal);
        setReload(new Date());
        toast.success(
          <Toast
            title="Destination Edited Successfully!!"
            text=""
            type="Success"
          />,
          { autoClose: 3000, hideProgressBar: true }
        );
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404)
          toast.error(
            <Toast
              title={error.response.data.message}
              text={error.response.data.message}
              type="Error"
            />,
            { autoClose: 3000, hideProgressBar: true }
          );
        else
          toast.error(
            <Toast title="Some Error Occurred" text="" type="Error" />,
            { autoClose: 3000, hideProgressBar: true }
          );
      });
  };

  const deleteDestinationEvent = (parameter) => {
    const formData = new FormData();
    formData.append("id", parameter);
    // console.log(parameter);
    axios
      .post(`${config.baseUrl}/destinationevent/delete`, formData, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: userData.token,
        },
      })
      .then(function (response) {
        // console.log(response);
        //setModal(!modal)
        setReload(new Date());
        toast.success(
          <Toast
            title="Destination Deleted Successfully!!"
            text=""
            type="Success"
          />,
          { autoClose: 3000, hideProgressBar: true }
        );
      })
      .catch(function (error) {
        if (error.response && error.response.status === 400)
          toast.error(
            <Toast
              title={error.response.data.message}
              text={error.response.data.errors.Error}
              type="Error"
            />,
            { autoClose: 3000, hideProgressBar: true }
          );
        else
          toast.error(
            <Toast title="Some Error Occurred" text="" type="Error" />,
            { autoClose: 3000, hideProgressBar: true }
          );
      });
  };

  const handleConfirmTextDelete = (id) => {
    return MySwal.fire({
      title: "Are you sure you want to delete the Destination?",
      text: "",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-danger ml-1",
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        // console.log(result.value);
        deleteDestinationEvent(id);
      }
    });
  };

  const columns = [
    {
      name: "Destination_Name",
      selector: "destination.name",
      sortable: true,
      minWidth: "200px",
    },
    {
      name: "title",
      selector: "title",
      sortable: true,
      minWidth: "100px",
    },
    {
      name: "subtitle",
      selector: "subTitle",
      sortable: true,
      minWidth: "100px",
    },
    {
      name: "startDate",
      selector: (row) => row.startDate.substring(0, 10),
      sortable: true,
      minWidth: "100px",
    },
    {
      name: "endDate",
      selector: (row) => row.endDate.substring(0, 10),
      sortable: true,
      minWidth: "100px",
    },
    {
      name: "Actions",
      allowOverflow: true,
      cell: (row) => {
        return (
          <div className="d-flex">
            <Link onClick={(e) => handleEdit(row)}>
              <Edit color="green" id="enable" className="ml-1" size={23} />
              <UncontrolledTooltip placement="top" target="enable">
                Edit
              </UncontrolledTooltip>
            </Link>
            <Link onClick={(e) => handleConfirmTextDelete(row._id)}>
              <Trash className="ml-1" color="red" size={23} />
            </Link>
          </div>
        );
      },
    },
  ];

  // ** Function to handle filter
  const handleFilter = (e) => {
    //console.log("from searchbox");
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = data.filter((item) => {
        const startsWith =
          item.destination.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.subTitle.toLowerCase().startsWith(value.toLowerCase());

        const includes =
          item.destination.name.toLowerCase().includes(value.toLowerCase()) ||
          item.subTitle.toLowerCase().includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData(updatedData);
      setSearchValue(value);
    }
  };

  useEffect(() => {
    axios
      .get(`${config.baseUrl}/destinationevent/list`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userData.token,
        },
      })
      .then((response) => {
        // console.log(response);
        setData(response.data.data);
      });
    axios
      .get(`${config.baseUrl}/destination/list`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userData.token,
        },
      })
      .then((response) => {
        // console.log(response);
        setDataDestination(response.data.data);
      });
  }, [reload]);

  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Destination Event Management </CardTitle>

          <Modal
            isOpen={modal}
            toggle={() => setModal(!modal)}
            className="modal-dialog-centered"
          >
            <ModalHeader toggle={() => setModal(!modal)}>
              Add New Destination Event
            </ModalHeader>
            <Form
              className="auth-register-form mt-2"
              onSubmit={saveDestinationEvent}
            >
              <ModalBody>
                {/* <FormGroup>
             <Input  value={_id}  name="_id" id='_id' hidden/>
              <Label for='destinationInfo'>Destination Name:</Label>
              <Input type='text' value={DestinationName} required onChange={(e) => setDestinationName(e.target.value)} name="name" id='name' />
            </FormGroup> */}
                <FormGroup>
                  <Label for="bannerName">Destination Name: </Label>
                  <Input
                    list="itemData"
                    placeholder="type here..."
                    value={destination}
                    // onChange={(e) => setDestinationName(e.target.value)}
                    name="destination"
                    id="destination"
                  />
                  <datalist id="itemData">
                    {dataDestination.map((item) => {
                      // console.log(item.name);
                      return <option value={item._id}>{item.name}</option>;
                    })}
                  </datalist>
                </FormGroup>
                <FormGroup>
                  <Label for="destinationEventTitle">Title:</Label>
                  <Input
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setDestinationEventTitle(e.target.value)}
                    name="title"
                    id="title"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="destinationEventSubTitle">SubTitle:</Label>
                  <Input
                    type="text"
                    value={subTitle}
                    required
                    onChange={(e) =>
                      setDestinationEventSubTitle(e.target.value)
                    }
                    name="subTitle"
                    id="subtitle"
                  />
                  <Label for="destinationEventDesc">Description:</Label>
                  {/* <Input type='text' value={subTitle} required onChange={(e) => setDestinationEventSubTitle(e.target.value)} name="subTitle" id='subTitle' /> */}
                  <textarea
                    className="form-control"
                    type="text"
                    value={desC}
                    required
                    onChange={(e) => setDestinationEventDesc(e.target.value)}
                    name="desC"
                    id="desC"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="imageFileUrl">Image</Label>
                  <CustomInput
                    name="imageFileUrl"
                    style={{ zIndex: "5000" }}
                    type="file"
                    multiple
                    onChange={(e) => setGalleryImage(e.target.files)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="destinationEventStartDate">
                    Destination startDate:
                  </Label>
                  <Flatpickr
                    name="startDate"
                    value={startDate}
                    id="startDate"
                    className="c-date-picker form-control"
                    options={{ dateFormat: "Y-m-d" }}
                    onChange={(e) => setDestinationEventStartDate(e[0])}
                  />
                  <Label for="destinationEventEndDate">
                    Destination endDate:
                  </Label>
                  <Flatpickr
                    name="endDate"
                    value={endDate}
                    id="endDate"
                    className="c-date-picker form-control"
                    options={{ dateFormat: "Y-m-d" }}
                    onChange={(e) => setDestinationEventEndDate(e[0])}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  Save
                </Button>{" "}
              </ModalFooter>
            </Form>
          </Modal>

          {/* to edit another modal is added */}
          <Modal
            isOpen={editModal}
            toggle={() => setEditModal(!editModal)}
            className="modal-dialog-centered"
          >
            <ModalHeader toggle={() => setEditModal(!editModal)}>
              Edit Banner
            </ModalHeader>
            <Form
              className="auth-register-form mt-2"
              onSubmit={editDestinationEvent}
            >
              <ModalBody>
                {/* <FormGroup>
             <Input  value={_id}  name="_id" id='_id' hidden/>
              <Label for='destinationInfo'>DestinationName:</Label>
              <Input type='text' value={DestinationName} required onChange={(e) => setDestinationName(e.target.value)} name="name" id='name' />
            </FormGroup> */}
                {/* <FormGroup>
              <Label for='slug'>Slug:</Label>
              <Input type='text' value={slug} required onChange={(e) => setSlug(e.target.value)} name="slug" id='slug'/>
            </FormGroup> */}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  Edit
                </Button>{" "}
              </ModalFooter>
            </Form>
          </Modal>

          <div className="d-flex mt-md-0 mt-1">
            <Button className="ml-2" color="primary" onClick={handleModal}>
              <Plus size={15} />
              <span className="align-middle ml-50">
                Add New Destination Event
              </span>
            </Button>
          </div>
        </CardHeader>
        <Row className="justify-content-end mx-0">
          <Col
            className="d-flex align-items-center justify-content-end mt-1"
            md="6"
            sm="12"
          >
            <Label className="mr-1" for="search-input">
              Search
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input"
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <DataTable
          noHeader
          pagination
          // selectableRows
          columns={columns}
          paginationPerPage={7}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          data={searchValue.length ? filteredData : data}
        />
      </Card>
      {/* <AddNewModal open={modal} handleModal={handleModal} /> */}
    </Fragment>
  );
};

export default DestinationEventManage;
