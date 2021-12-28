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
const MySwal = withReactContent(Swal);

const DestinationGalleryList = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  // ** States
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [destinationData, setDestinationList] = useState([]);
  const [_id, setId] = useState(0);

  const [destination, setDestinationName] = useState("");
  // console.log(destination);
  // const [bannerName, setBannerName] = useState("");
  // const [redirectUrl, setRedirectUrl] = useState("");
  const [galleryImage, setGalleryImage] = useState("");
  const [type, setDestinationGalleryType] = useState("");

  const [reload, setReload] = useState(new Date());

  // ** Function to handle Modal toggle
  const handleModal = () => {
    setDestinationName();
    // setRedirectUrl();
    setModal(!modal);
  };
  const editDestinationGallery = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post(`${config.baseUrl}/destinationgallery/edit`, formData, {
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
  const handleEdit = (row) => {
    setId(row._id)
    // console.log(row.destination);
    setDestinationName(row.destination);
    setGalleryImage(row.imageFileUrl);
    setDestinationGalleryType(row.type);
    // setSlug(row.slug)
    setEditModal(!editModal);
  };
  const deleteDestinationGallery = (parameter) => {
    const formData = new FormData();
    formData.append("id", parameter);
    // console.log(parameter);
    axios
      .post(`${config.baseUrl}/destinationgallery/delete`, formData, {
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
      title: "Are you sure you want to delete the Destination gallery?",
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
        deleteDestinationGallery(id);
      }
    });
  };

  const columns = [
    {
      name: "Destination Name",
      selector: "destination.name",
      sortable: true,
    },
    {
      name: "Destination Image",
      cell: (row) => {
        // console.log(row.imageFileUrl);
        // console.log(`${process.env.NODE_APP_ROOT_PATH}` + row.imageFileUrl[0]);
        return (
          <div className="d-flex">
            <ReactFancyBox
              image={`http://localhost:7000/` + row.imageFileUrl[0]}
              defaultThumbnailWidth={50}
              defaultThumbnailHeight={50}
            />
          </div>
        );
      },
    },
    {
      name: "Type",
      selector: "type",
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (w) => w.createdDate.substring(0, 10),
      sortable: true,
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
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = data.filter((item) => {
        const startsWith = item.destination.name
          .toLowerCase()
          .startsWith(value.toLowerCase());

        const includes = item.type.toLowerCase().includes(value.toLowerCase());

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

  const saveDestGallery = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("imageFileUrl", galleryImage);
    // for (const value of formData.values()) {
    //   console.log(value);
    //   }
    axios
      .post(`${config.baseUrl}/destinationgallery/store`, formData, {
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
            title="Banner Uploaded Successfully!!"
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

  useEffect(() => {
    axios
      .get(`${config.baseUrl}/destinationgallery/list`, {
        headers: {
          "Content-Type": "text/html",
          Authorization: userData.token,
        },
      })
      .then((response) => {
        setData(response.data.data);
        //console.log(response.data)
      });
    axios
      .get(`${config.baseUrl}/destination/list`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userData.token,
        },
      })
      .then((response) => {
        // console.log(response.data.data);
        setDestinationList(response.data.data);
      });
  }, [reload]);

  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Destination Gallery Management </CardTitle>

          <Modal
            isOpen={modal}
            toggle={() => setModal(!modal)}
            className="modal-dialog-centered"
          >
            <ModalHeader toggle={() => setModal(!modal)}>
              Add New Destination Images
            </ModalHeader>
            <Form
              className="auth-register-form mt-2"
              onSubmit={saveDestGallery}
            >
              <ModalBody>
                <FormGroup>
                  {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
                  <Label for="bannerName">Destination Name:</Label>
                  <Input
                    list="itemData" placeholder="type here..."
                    value={destination}
                    onChange={(e) => setDestinationName(e.target.value)}
                    name="destination"
                    id="destination"
                  />
                  <datalist id="itemData">
                    {destinationData.map((item) => {
                      // console.log(item.destination.name);
                      return <option value={item._id}>{item.name}</option>;
                    })}
                  </datalist>
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
                  <Label for="destinationGalleryType">GalleryType:</Label>
                  <select
                    className="form-control"
                    value={type}
                    onChange={(e) => setDestinationGalleryType(e.target.value)}
                    name="type"
                    id="type"
                  >
                    <option value="preview">preview</option>
                    <option value="overview">overview</option>
                    {/* <option value="event">event</option> */}
                  </select>
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
              onSubmit={editDestinationGallery}
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
                Add New Destination Images
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

export default DestinationGalleryList;
