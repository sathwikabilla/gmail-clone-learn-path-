const navigate = useNavigate();
const dispatch=useDispatch();
const openMail=()=>{
  dispatch(selectMail({
    id,
    title,
    subject,
    description,
    time,
  })
  );
  navigate("/mail");
};
 