// Code generated by go-swagger; DO NOT EDIT.

package share

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// OauthAuthenticateReader is a Reader for the OauthAuthenticate structure.
type OauthAuthenticateReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *OauthAuthenticateReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewOauthAuthenticateOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 302:
		result := NewOauthAuthenticateFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewOauthAuthenticateInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewOauthAuthenticateOK creates a OauthAuthenticateOK with default headers values
func NewOauthAuthenticateOK() *OauthAuthenticateOK {
	return &OauthAuthenticateOK{}
}

/*
OauthAuthenticateOK describes a response with status code 200, with default header values.

testing
*/
type OauthAuthenticateOK struct {
}

// IsSuccess returns true when this oauth authenticate o k response has a 2xx status code
func (o *OauthAuthenticateOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this oauth authenticate o k response has a 3xx status code
func (o *OauthAuthenticateOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this oauth authenticate o k response has a 4xx status code
func (o *OauthAuthenticateOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this oauth authenticate o k response has a 5xx status code
func (o *OauthAuthenticateOK) IsServerError() bool {
	return false
}

// IsCode returns true when this oauth authenticate o k response a status code equal to that given
func (o *OauthAuthenticateOK) IsCode(code int) bool {
	return code == 200
}

func (o *OauthAuthenticateOK) Error() string {
	return fmt.Sprintf("[GET /oauth/authorize][%d] oauthAuthenticateOK ", 200)
}

func (o *OauthAuthenticateOK) String() string {
	return fmt.Sprintf("[GET /oauth/authorize][%d] oauthAuthenticateOK ", 200)
}

func (o *OauthAuthenticateOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewOauthAuthenticateFound creates a OauthAuthenticateFound with default headers values
func NewOauthAuthenticateFound() *OauthAuthenticateFound {
	return &OauthAuthenticateFound{}
}

/*
OauthAuthenticateFound describes a response with status code 302, with default header values.

redirect back to share
*/
type OauthAuthenticateFound struct {

	/* Redirect URL
	 */
	Location string
}

// IsSuccess returns true when this oauth authenticate found response has a 2xx status code
func (o *OauthAuthenticateFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this oauth authenticate found response has a 3xx status code
func (o *OauthAuthenticateFound) IsRedirect() bool {
	return true
}

// IsClientError returns true when this oauth authenticate found response has a 4xx status code
func (o *OauthAuthenticateFound) IsClientError() bool {
	return false
}

// IsServerError returns true when this oauth authenticate found response has a 5xx status code
func (o *OauthAuthenticateFound) IsServerError() bool {
	return false
}

// IsCode returns true when this oauth authenticate found response a status code equal to that given
func (o *OauthAuthenticateFound) IsCode(code int) bool {
	return code == 302
}

func (o *OauthAuthenticateFound) Error() string {
	return fmt.Sprintf("[GET /oauth/authorize][%d] oauthAuthenticateFound ", 302)
}

func (o *OauthAuthenticateFound) String() string {
	return fmt.Sprintf("[GET /oauth/authorize][%d] oauthAuthenticateFound ", 302)
}

func (o *OauthAuthenticateFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// hydrates response header location
	hdrLocation := response.GetHeader("location")

	if hdrLocation != "" {
		o.Location = hdrLocation
	}

	return nil
}

// NewOauthAuthenticateInternalServerError creates a OauthAuthenticateInternalServerError with default headers values
func NewOauthAuthenticateInternalServerError() *OauthAuthenticateInternalServerError {
	return &OauthAuthenticateInternalServerError{}
}

/*
OauthAuthenticateInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type OauthAuthenticateInternalServerError struct {
}

// IsSuccess returns true when this oauth authenticate internal server error response has a 2xx status code
func (o *OauthAuthenticateInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this oauth authenticate internal server error response has a 3xx status code
func (o *OauthAuthenticateInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this oauth authenticate internal server error response has a 4xx status code
func (o *OauthAuthenticateInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this oauth authenticate internal server error response has a 5xx status code
func (o *OauthAuthenticateInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this oauth authenticate internal server error response a status code equal to that given
func (o *OauthAuthenticateInternalServerError) IsCode(code int) bool {
	return code == 500
}

func (o *OauthAuthenticateInternalServerError) Error() string {
	return fmt.Sprintf("[GET /oauth/authorize][%d] oauthAuthenticateInternalServerError ", 500)
}

func (o *OauthAuthenticateInternalServerError) String() string {
	return fmt.Sprintf("[GET /oauth/authorize][%d] oauthAuthenticateInternalServerError ", 500)
}

func (o *OauthAuthenticateInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}