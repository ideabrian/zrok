// Code generated by go-swagger; DO NOT EDIT.

package rest_model_zrok

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// ShareResponse share response
//
// swagger:model shareResponse
type ShareResponse struct {

	// frontend proxy endpoints
	FrontendProxyEndpoints []string `json:"frontendProxyEndpoints"`

	// svc token
	SvcToken string `json:"svcToken,omitempty"`
}

// Validate validates this share response
func (m *ShareResponse) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this share response based on context it is used
func (m *ShareResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ShareResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ShareResponse) UnmarshalBinary(b []byte) error {
	var res ShareResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
