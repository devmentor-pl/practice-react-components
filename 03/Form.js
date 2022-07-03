import React from "react";

class Form extends React.Component{

    submittingOnClick = (e) => {
        e.preventDefault();
        this.props.handleSubmit();
    };

    render() {
        const { handleChange, commentValue} = this.props;
        return (
            <>
                <form>
                    <div>
                        <label>
                            <textarea onChange={handleChange} style={{ "minWidth": "300px", "minHeight": "120px" }} name="content" value={commentValue} />
                        </label>
                    </div>
                    <div><input onClick={this.submittingOnClick} type="submit" value="dodaj komentarz" /></div>
                </form>
            </>
        )
    };
};

export default Form;